import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresaleComponent } from './presale.component';

describe('PresaleComponent', () => {
  let component: PresaleComponent;
  let fixture: ComponentFixture<PresaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresaleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
