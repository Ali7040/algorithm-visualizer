import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InOrderTraversalComponent } from './in-order-traversal.component';

describe('InOrderTraversalComponent', () => {
  let component: InOrderTraversalComponent;
  let fixture: ComponentFixture<InOrderTraversalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InOrderTraversalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InOrderTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
