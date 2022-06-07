import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  public gradient: string = ''
  public pos: number = 0;
  public raf: number = 0;

  public createGradient(pos: number) {
    this.gradient = `linear-gradient(${Math.sin(this.pos * Math.PI / 2) * 360}deg, #ff006e, #8338ec, #3a86ff)`
  }

  public updateGradient() {
    this.pos += 2e-3
    this.createGradient(this.pos)
    this.raf = requestAnimationFrame(this.updateGradient.bind(this))
  }

  ngOnInit(): void {
    this.updateGradient()
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf)
  }

}
