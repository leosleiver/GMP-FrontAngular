import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSetorComponent } from './editar-setor.component';

describe('EditarSetorComponent', () => {
  let component: EditarSetorComponent;
  let fixture: ComponentFixture<EditarSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
