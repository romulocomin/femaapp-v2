import { Directive, Input, ElementRef, SimpleChanges, Renderer } from '@angular/core';

@Directive({
  selector: '[text-avatar]' // Attribute selector
})

export class TextAvatarDirective {

  constructor(private elt:Element, public render:Renderer) {
    console.log(' Directive called');
    }
  @Input() text:String;    
  ngOnChanges(changes: SimpleChanges) {
    let text = changes['text'] ? changes['text'].currentValue : null;
    

    
  }  

  private extractFirstCharacter(text: string): string {
    return text.charAt(0) || '';
  }
}
 
