import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  public gradient: string = ''
  public image: string = ''
  public pos: number = 0;
  public raf: number = 0;

  public createGradient(pos: number) {
    this.gradient = `linear-gradient(${Math.sin(pos * Math.PI / 2) * 360}deg, #ff006e, #8338ec, #3a86ff)`
  }

  public updateGradient() {
    this.pos += 2e-3
    this.createGradient(this.pos)
    this.raf = requestAnimationFrame(this.updateGradient.bind(this))
  }

  public createImage(): void {
    const width = 250;
    const height = 600;
    const canvas = document.createElement('canvas')
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d')!
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#ff006e');
    gradient.addColorStop(0.25, '#8338ec');
    gradient.addColorStop(.5, '#3a86ff');
    gradient.addColorStop(.75, '#1abd07');
    gradient.addColorStop(1, '#ff9005');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    this.image = `url(${canvas.toDataURL()})`
  }

  ngOnInit(): void {
    // this.updateGradient()
    this.createImage()
  }

  ngOnDestroy(): void {
    // cancelAnimationFrame(this.raf)
  }

}
