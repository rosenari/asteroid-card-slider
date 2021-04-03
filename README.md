![asteroid-ui](https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png)

# asteroid-card-slider

## Build

```bash
$ npm run build
```

## Usage

```html
<script src="./dist/main.js"></script>
<div id="slider">
</div>
<script>
    //DOM LOADED => Handler Call
    document.addEventListener("DOMContentLoaded", function () {
        let slider = new asteroid.Cardslider("slider", {
            width: "400px",
            images: [
                "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png",
                "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png",
                "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png",
                "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png"
            ]
        });
    });
</script>
```

### ES2015+ environments
```javascript
import { Cardslider } from "./dist/index.js";

let cardslider = new Cardslider("slider", {
                        width: "400px",
                        images: [
                            "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png",
                            "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png",
                            "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png",
                            "https://user-images.githubusercontent.com/49670068/113144366-1e726680-9268-11eb-922b-0ac1ff0aeb23.png"
                        ]
                    });
```

### Available Options
- width : cardslider Width (type : string , default : "360px")
- height : cardslider Height (type : string , default : "150px")
- isPoint : point visible (type : boolean , default : true)
- images : images url list (type : array , default : [])

### View
![image](https://user-images.githubusercontent.com/49670068/113424950-f28fe600-940b-11eb-86a5-52193adae5ce.png)
