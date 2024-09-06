import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreorderTraversalComponent } from './preorder-traversal.component';

describe('PreorderTraversalComponent', () => {
  let component: PreorderTraversalComponent;
  let fixture: ComponentFixture<PreorderTraversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreorderTraversalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreorderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
