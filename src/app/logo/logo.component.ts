import { Component, OnInit, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  constructor(private elemRef: ElementRef) {}
  getSVGPathsLength(paths) {
    for (const index in paths) {
      if (paths[index]) {
        const path: SVGPathElement = paths[index];
        if (path.getTotalLength) {
          const length = path.getTotalLength().toString();
          path.style.setProperty('stroke-dasharray', length);
          path.style.setProperty('stroke-dashoffset', length);
        }
      }
    }
  }

  ngOnInit() {
    const elem = this.elemRef.nativeElement;
    const svg: SVGPathElement = elem.children[0];
    svg.style.setProperty('$letters', svg.childElementCount.toString());

    this.getSVGPathsLength(svg.children);
  }
}
