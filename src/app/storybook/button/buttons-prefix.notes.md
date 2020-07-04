### Button Prefix

test1test1test1test1test1test1test1test1test1test1

```typescript
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent implements OnInit {
  @Input() text: string = "default";
  constructor() {}

  ngOnInit(): void {}
}
```

```html
<button igxButton="flat">{{ text }}</button>
<button igxButton="raised">{{ text }}</button>
<button igxButton="outlined">{{ text }}</button>
```
