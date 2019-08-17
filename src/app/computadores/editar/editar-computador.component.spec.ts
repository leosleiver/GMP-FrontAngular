import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarComputadorComponent } from './editar-computador.component';

describe('EditarComputadorComponent', () => {
  let component: EditarComputadorComponent;
  let fixture: ComponentFixture<EditarComputadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarComputadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
