import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecursosPremiumPage } from './recursos-premium.page';

describe('RecursosPremiumPage', () => {
  let component: RecursosPremiumPage;
  let fixture: ComponentFixture<RecursosPremiumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecursosPremiumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
