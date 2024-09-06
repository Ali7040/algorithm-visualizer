import { Component } from '@angular/core';
import { TreeNode } from '../../../model/tree.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preorder-traversal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preorder-traversal.component.html',
  styleUrl: './preorder-traversal.component.scss',
})
export class PreorderTraversalComponent {
  treeNodes: TreeNode[] = [];
  activeNode: number | null = null;

  ngOnInit() {
    this.resetTree();
  }

  resetTree() {
    this.treeNodes = this.createRandomTree();
    this.activeNode = null;
  }

  createRandomTree(): TreeNode[] {
    const generateRandomValue = () => Math.floor(Math.random() * 100);

    const root = new TreeNode(generateRandomValue());
    root.left = new TreeNode(generateRandomValue());
    root.right = new TreeNode(generateRandomValue());
    root.left.left = new TreeNode(generateRandomValue());
    root.left.right = new TreeNode(generateRandomValue());
    root.right.left = new TreeNode(generateRandomValue());
    root.right.right = new TreeNode(generateRandomValue());

    return [
      root,
      root.left,
      root.right,
      root.left.left,
      root.left.right,
      root.right.left,
      root.right.right,
    ];
  }

  async preorderTraversal(root: TreeNode | null): Promise<void> {
    if (root === null) return;

    // Animate the current node
    this.animateNode(root.value);
    await this.sleep(500);

    // Traverse the left subtree
    await this.preorderTraversal(root.left);

    // Traverse the right subtree
    await this.preorderTraversal(root.right);
  }

  async animateNode(value: number) {
    this.activeNode = value;
    await this.sleep(500);
    this.activeNode = null;
  }

  startPreorderTraversal() {
    const root = this.treeNodes[0]; // Get the root from the treeNodes
    this.preorderTraversal(root);
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
