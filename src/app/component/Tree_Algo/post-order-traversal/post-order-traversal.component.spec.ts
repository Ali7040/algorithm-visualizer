import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOrderTraversalComponent } from './post-order-traversal.component';

describe('PostOrderTraversalComponent', () => {
  let component: PostOrderTraversalComponent;
  let fixture: ComponentFixture<PostOrderTraversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostOrderTraversalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostOrderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
