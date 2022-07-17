import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe(HeaderComponent.name, () => {
  let sut: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    sut = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(sut).toBeTruthy();
  });
});
