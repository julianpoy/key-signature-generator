import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import * as tone from "tone";
import { transpose, Scale, Note } from 'tonal'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: []
})
export class HomePage {
  public signatures: any;
  public signature: any;

  public showText: any;
  public showStaff: any;

  constructor(public navCtrl: NavController) {
      this.signatures = [
        {
          major: "C",
          minor: "A",
          img: "/assets/cMaj.svg",
          sharps: 0,
          flats: 0
        },
        {
          major: "G",
          minor: "E",
          img: "/assets/gMaj.svg",
          sharps: 1,
          flats: 0
        },
        {
          major: "D",
          minor: "B",
          img: "/assets/dMaj.svg",
          sharps: 2,
          flats: 0
        },
        {
          major: "A",
          minor: "F#",
          img: "/assets/aMaj.svg",
          sharps: 3,
          flats: 0
        },
        {
          major: "E",
          minor: "C#",
          img: "/assets/eMaj.svg",
          sharps: 4,
          flats: 0
        },
        {
          major: "B",
          minor: "G#",
          img: "/assets/bMaj.svg",
          sharps: 5,
          flats: 0
        },
        {
          major: "F#",
          minor: "D#",
          img: "/assets/fSharpMaj.svg",
          sharps: 6,
          flats: 0
        },
        {
          major: "C#",
          minor: "A#",
          img: "/assets/cSharpMaj.svg",
          sharps: 7,
          flats: 0
        },
        {
          major: "F",
          minor: "D",
          img: "/assets/fMaj.svg",
          sharps: 0,
          flats: 1
        },
        {
          major: "Bb",
          minor: "G",
          img: "/assets/bFlatMaj.svg",
          sharps: 0,
          flats: 2
        },
        {
          major: "Eb",
          minor: "C",
          img: "/assets/eFlatMaj.svg",
          sharps: 0,
          flats: 3
        },
        {
          major: "Ab",
          minor: "F",
          img: "/assets/aFlatMaj.svg",
          sharps: 0,
          flats: 4
        },
        {
          major: "Db",
          minor: "Bb",
          img: "/assets/dFlatMaj.svg",
          sharps: 0,
          flats: 5
        },
        {
          major: "Gb",
          minor: "Eb",
          img: "/assets/gFlatMaj.svg",
          sharps: 0,
          flats: 6
        },
        {
          major: "Cb",
          minor: "Ab",
          img: "/assets/cFlatMaj.svg",
          sharps: 0,
          flats: 7
        },
      ];
  }

  randomize(mode) {
    var maxIdx = this.signatures.length - 1;
    var randomIdx = Math.floor(Math.random() * maxIdx);

    this.signature = this.signatures[randomIdx];

    this.showText = false;
    this.showStaff = false;
    switch(mode) {
      case "text":
        this.showText = true;
        break;
      case "staff":
        this.showStaff = true;
        break;
      case "full":
        this.showText = true;
        this.showStaff = true;
        break;
    }
  }

  playScale() {
    var synth = new tone.Synth().toMaster();
    tone.Transport.bpm.value = 340;

    var name = this.signature.major + '4'
    var notes = Scale.notes(name + ' major');
    var top = Note.from({ oct: 5 }, name);
    console.log(notes)
    var direction = 'up';
    var i = 0;
    var count = 0;
    while(true) {
      var note = notes[i] || top;

      console.log(note)

      synth.triggerAttackRelease(note, "1n", "+" + count + 'm');

      count++;
      if (direction === 'up') {
        i++;
        if (i === notes.length) {
          direction = 'down';
        }
      } else {
        i--;
        if (i === -1) {
          break;
        }
      }
    }
  }
}
