## Welcome to CloverSalad

#### The unofficial Creature of the Deep assistant

---

CloverSalad provides detailed information about each fish found in the mobile game Creatures of the Deep. 

Here, you will find information on 

- the weight of the fish 
- their specific characteristics
- the locations where you are most likely to find them
- and a converter weight <> points 
### Contributions are (very) welcome

The information gathered here is probably very approximate, imprecise, and possibly inaccurate for some. Feel free to tell me I'm wrong, even in a contemptuous tone :)

COTD is a difficult game, whose mechanics are hidden and that we must discover together.

To contribute, submit map positions or signal a bug, you can
- open an "issue" in github : [https://github.com/cloversalad/cloversalad/issues](https://github.com/cloversalad/cloversalad/issues)

Or

- contact me on Discord : [https://discord.com/users/data#6380](https://discord.com/users/data#6380)



## Fish model 

Technicaly speaking, in the website, each fish is represented by a JavaScript object as the example below.

```javascript
{
    id: "320", // -> arbitrary uniq fish ID
    type: "rare", // -> common, rare, epic, or monster
    name: {
        eng: "spiny skate" // -> fish name
    },
    attributes: [
        { shadow: [2,3] }, // -> size from 0 (tinyest) to 4 (biggest)
        { rods: [2,3,5] }, // -> 0=twig, 1=fiber, 2=carbon, 3=monster, 4=trash, 5=slowmo
        { moment: [0,1] } // -> 0=day, 1=night
    ],
    seasons: [
        true,
        true,
        true,
        true,
        true,
        true, // -> 12 values (12 months) true=in_season, false=out_of_season
        true,
        true,
        true,
        true,
        true,
        true
    ],
    kgs: {
        min: 1,
        max: 60
    },
    lbs: {
        min: 2.20,
        max: 132.28
    },
    map: "alaska",
    positions: [ // -> see schema below
        {
            x: 55,
            y: 30
        }
    ],
    positionNote: "Is basically everywhere..." // -> free text description
}

```

The `positions` values are coordinates to indicate a 2D position on the related map. The horizontal (x) and vertical (y) axes range from 0% to 100%.


![position description](https://i.imgur.com/51P0Wnw.jpeg)