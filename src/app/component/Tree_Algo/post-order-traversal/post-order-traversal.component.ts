import { Component } from '@angular/core';
import { TreeNode } from '../../../model/tree.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-order-traversal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-order-traversal.component.html',
  styleUrl: './post-order-traversal.component.scss',
})
export class PostOrderTraversalComponent {
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

  async postOrderTraversal(root: TreeNode | null): Promise<void> {
    if (root === null) return;

    // Traverse the left subtree
    await this.postOrderTraversal(root.left);

    // Traverse the right subtree
    await this.postOrderTraversal(root.right);

    // Animate the current node
    this.animateNode(root.value);
    await this.sleep(500);
  }

  animateNode(value: number) {
    this.activeNode = value;
  }

  sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
