import { Injectable } from '@angular/core';
import { ConfigDB } from '../../../../configs/config';

@Injectable({
  providedIn: 'root'
})
export class CustomizerService {

  constructor() {
    document.body.className = this.data.color.mix_layout;
    document.body.setAttribute("main-theme-layout", this.data.settings.layout_type);
    document.getElementsByTagName('html')[0].setAttribute('dir', this.data.settings.layout_type);
    var color = localStorage.getItem("color") || this.data.color.color;
    var layoutVersion = localStorage.getItem("layoutVersion") || this.data.color.layout_version;
    if (color) {
      this.createStyle(color);
      if (layoutVersion)
        document.body.className = layoutVersion;
    }
  }

  // Configration Layout
  public data = ConfigDB.data

  // Set Customize layout Version
  setLayoutType(layout) {
    document.body.setAttribute("main-theme-layout", layout);
    document.getElementsByTagName('html')[0].setAttribute('dir', layout);
    this.data.settings.layout_type = layout
  }

  // Set Customize layout Version
  setLayout(layout) {
    document.body.className = layout
    this.data.color.mix_layout = layout
    localStorage.setItem('layout_type', layout);
  }

  // Set Color 
  setColor(color) {
    this.createStyle(color)
    this.data.color.color = color
    this.data.color.primary_color = '#3a57e8';
    this.data.color.secondary_color = '#6c757d';
    localStorage.setItem('color', this.data.color.color);
    localStorage.setItem('primary_color', this.data.color.primary_color);
    localStorage.setItem('secondary_color', this.data.color.secondary_color);
    window.location.reload();
  }

  // Set Customize layout Version
  setColorLightScheme(color) {
    this.setColor(color);
    this.data.color.layout_version = 'light';
    localStorage.setItem('layoutVersion', this.data.color.layout_version);
  }

  // Set Customize layout Version
  setColorDarkScheme(color) {
    this.setColor(color);
    this.data.color.layout_version = 'dark-only';
    localStorage.setItem('layoutVersion', this.data.color.layout_version);
  }

  // Create style sheet append in head
  createStyle(color) {
    var head = document.head;
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = window.location.origin + "/assets/css/" + color + ".css";
    head.appendChild(link);
  }

}
