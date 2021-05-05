import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-fade',
  templateUrl: './fade.component.html',
  styleUrls: ['./fade.component.css']
})
export class FadeComponent implements OnInit {

  // To maintain which section is being displayed.
  currentSection: any;
  constructor() { }

  ngOnInit(): void {
    // Register the ScrollTrigger with gsap
    gsap.registerPlugin(ScrollTrigger);

    // Get an array of all the sections
    let sections = gsap.utils.toArray("section");

    //Set the first section as the current section
    this.currentSection = sections[0];

    // Stretch out the body height according to however many sections there are. 
    gsap.set("body", { height: (sections.length * 100) + "vh" });

    
    // loop over section to create animations
    sections.forEach((section: any, i) => {
      // Set the background for each section
      section.style.backgroundImage = `url(https://picsum.photos/${innerWidth}/${innerHeight}?random=${i})`;

      // create a ScrollTrigger for each section
      gsap.to(section, {
        scrollTrigger: {

          // use dynamic scroll positions based on the window height
          start: () => (i - 0.5) * innerHeight,
          end: () => (i + 0.5) * innerHeight,

          // when a new section activates (from either direction), set the section accordinglyl.
          onToggle: self => self.isActive && this.setCurrentSection(section)
        }
      });
    });
  }

  // Animates the new section and updates the current section
  setCurrentSection(newSection: any) {
    if (newSection !== this.currentSection) {
      // Hide the current section by fading out
      gsap.to(this.currentSection, { scale: 0.8, autoAlpha: 0 })
      
      // Display the current section by fading in
      gsap.to(newSection, { scale: 1, autoAlpha: 1 });
      
      // Update the current section.
      this.currentSection = newSection;
    }
  }
}
