import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMemberModalComponent } from './manage-member-modal.component';

describe('ManageMemberModalComponent', () => {
  let component: ManageMemberModalComponent;
  let fixture: ComponentFixture<ManageMemberModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageMemberModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageMemberModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
