import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaChatPlusComponent } from './ia-chat-plus.component';

describe('IaChatPlusComponent', () => {
  let component: IaChatPlusComponent;
  let fixture: ComponentFixture<IaChatPlusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IaChatPlusComponent]
    });
    fixture = TestBed.createComponent(IaChatPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
