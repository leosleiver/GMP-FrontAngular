import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComputadorComponent } from './cadastrar-computador.component';

describe('CadastrarComputadorComponent', () => {
  let component: CadastrarComputadorComponent;
  let fixture: ComponentFixture<CadastrarComputadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarComputadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
