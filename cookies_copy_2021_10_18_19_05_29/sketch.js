let json = {}; 
let recipes = [];
let allIngredients = [];
let population = [];
let populationSize = 20;

let recipe_number = 0;
let history = [];


let adverbs =['very', 'slightly', 'extraordinarily', 'exceptionally', 'overly', 'somewhat', 'moderately', 'rather', 'sort of', 'kind of', 'a shade of', 'mere', 'pure', 'plain', 'utter', 'abundantly', 'outstandingly', 'unusually', 'highly', 'uncommonly', 'eminently', 'truly', 'mightily', 'distinctly', 'particularly', 'remarkably', 'awfully', 'terribly', 'majorly', 'seriously', 'mega', 'mucho','slightly', ];
let adjectives = ['mouth-watering', 'delicious', 'crunchy','chocolate', 'tasty', 'finger-licking', 'flavourful', 'rich', 'divine'];
let pastries = ['cake', 'cookies', 'biscuits', 'wafer', 'tart', 'macaroon', 'biscotto', 'brownie'];


function preload() {
  json = loadJSON("recipes.json");
}

function setup() {
  createCanvas(400, 400);
  recipes = json.recipes;
  
  // extract all of the ingredients from the inspiring set
  for (const r of recipes) {
    for (const i of r.ingredients) {
      allIngredients.push(i);
    }
  }

  // create an initial population
  for (let i = 0; i < populationSize; i++) {
    population.push(random(recipes));
  }
  evaluateRecipes(population);
  population.sort((a, b) => b.fitness - a.fitness);
  
  frameRate(2);
}

function evaluateRecipes(recipes) 
{
  for (const r of recipes) 
  {
      let alpha,bravo,charlie,delta,echo,foxtrot;
      alpha = bravo = charlie = delta = echo = foxtrot = 1;
      for (let i=0; i<r.ingredients.length; i++)
      {
        if (r.ingredients[i].ingredient.includes("egg"))
          {
            let zulu = 0.001*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*0.9;                            // fruitness
            bravo = bravo*zulu*1.7;                            // chocolaticity
            charlie = charlie*zulu*6;                        // cakeyness
            delta = delta*zulu*4;                            // satiety
            echo = echo;                              // oddity
            foxtrot = foxtrot*zulu*13;                           // repulsivity
            
          }
        else if (r.ingredients[i].ingredient.includes("sugar"))
          {
            let zulu = 0.006*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*2;                            // fruitness
            bravo = bravo*zulu*3.1;                            // chocolaticity
            charlie = charlie*zulu*3;                        // cakeyness
            delta = delta*zulu*8;                            // satiety
            echo = echo;                                     // oddity
            foxtrot = foxtrot;                               // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("chocolate"))
          {
            let zulu = 0.1*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha;                            // fruitness
            bravo = bravo*zulu*9;                            // chocolaticity
            charlie = charlie*zulu*1.8;                        // cakeyness
            delta = delta*zulu*1;                            // satiety
            echo = echo*zulu*3;                              // oddity
            foxtrot = foxtrot*3;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("vanilla extract"))
          {
            let zulu = 0.005*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*2;                            // fruitness
            bravo = bravo*zulu*3;                            // chocolaticity
            charlie = charlie*zulu*2;                        // cakeyness
            delta = delta*1;                            // satiety
            echo = echo*zulu*4.1;                              // oddity
            foxtrot = foxtrot*14;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("milk"))
          {
            let zulu = 0.04*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha;                            // fruitness
            bravo = bravo*zulu*3.4;                            // chocolaticity
            charlie = charlie*zulu*6.4;                        // cakeyness
            delta = delta*zulu*1.5;                            // satiety
            echo = echo*3;                              // oddity
            foxtrot = foxtrot*5;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("flour"))
          {
            let zulu = 0.01*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*0.9;                            // fruitness
            bravo = bravo;                            // chocolaticity
            charlie = charlie*zulu*8.2;                        // cakeyness
            delta = delta*zulu*3;                            // satiety
            echo = echo;                              // oddity
            foxtrot = foxtrot;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("baking"))
          {
            let zulu = 0.007*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*1;                            // fruitness
            bravo = bravo*zulu*1;                            // chocolaticity
            charlie = charlie*zulu*5;                        // cakeyness
            delta = delta*zulu*12;                            // satiety
            echo = echo;                              // oddity
            foxtrot = foxtrot*zulu*1.5;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("butter"))
          {
            let zulu = 0.01*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha;                            // fruitness
            bravo = bravo*zulu*1.9;                            // chocolaticity
            charlie = charlie*zulu*2.3;                        // cakeyness
            delta = delta*zulu*15;                            // satiety
            echo = echo*5;                              // oddity
            foxtrot = foxtrot*7;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("almonds"))
          {
            let zulu = 0.09*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*3;                            // fruitness
            bravo = bravo*zulu*3;                            // chocolaticity
            charlie = charlie*zulu*1;                        // cakeyness
            delta = delta;                            // satiety
            echo = echo;                              // oddity
            foxtrot = foxtrot;                        // repulsivity
          }
        else if (r.ingredients[i].ingredient.includes("raisins"))
          {
            let zulu = 0.05*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*4;                            // fruitness
            bravo = bravo*zulu*1.5;                            // chocolaticity
            charlie = charlie*12;                        // cakeyness
            delta = delta;                            // satiety
            echo = echo*zulu*zulu;                              // oddity
            foxtrot = foxtrot*3;                        // repulsivity
          }
        
        else if (r.ingredients[i].ingredient.includes("oats"))
          {
            let zulu = 0.06*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha*zulu*1;                            // fruitness
            bravo = bravo*zulu*1.8;                            // chocolaticity
            charlie = charlie*5;                        // cakeyness
            delta = delta*zulu*7;                            // satiety
            echo = echo*1.4;                              // oddity
            foxtrot = foxtrot;                        // repulsivity
          }
         else if (r.ingredients[i].ingredient.includes("cinnamon"))
          {
            let zulu = 0.03*r.ingredients[i].amount;          // amount
            if (zulu<1)
              {
                zulu = 1;
              }
            alpha = alpha;                            // fruitness
            bravo = bravo*zulu*5;                            // chocolaticity
            charlie = charlie*2;                        // cakeyness
            delta = delta;                            // satiety
            echo = echo*echo*zulu*zulu*14;                              // oddity
            foxtrot = foxtrot;                        // repulsivity
          }
        else
          { 
            void(0);
          }
      }
      let smatch = 0.5*(bravo+alpha+charlie);
      if (delta>smatch)
        {
          delta = -delta;
        }
      r.fitness = alpha+bravo+charlie+delta-echo-foxtrot;
      r.fitness = r.fitness*0.003*r.ingredients.length;
  }
}

// Implements a roulette wheel selection
function selectRecipe(recipes) {
  let sum = recipes.reduce((a, r) => a + r.fitness, 0);
  // choose a random number less than the sum of fitnesses
  let f = int(random(sum));
  // iterate through all items in the recipes
  for (const r of recipes) {
    // if f is less than a recipe's fitness, return it
    if (f < r.fitness) return r;
    // otherwise subtract the recipe's fitness from f
    f -= r.fitness;
  }
  // if no recipe has been returned, return the last one
  return recipes[recipes.length - 1];
}

function generateRecipes(size, population) {
  let R = [];
  while (R.length < size) {
    let r1 = selectRecipe(population);
    let r2 = selectRecipe(population);
    let r = crossoverRecipes(r1, r2);
    mutateRecipe(r);
    normaliseRecipe(r);
    R.push(r);
  }
  evaluateRecipes(R);
  return R;
}

function selectPopulation(P, R) {
  R.sort((a, b) => b.fitness - a.fitness);
  P = P.slice(0, P.length/2).concat(R.slice(0, R.length/2));
  P.sort((a, b) => b.fitness - a.fitness);
  return P;
}

function update() {
  let R = generateRecipes(populationSize, population);
  population = selectPopulation(population, R);
}

function draw() {
  update();
  background(255);
  history.push(population[0].fitness);
  stroke(0, 255, 255);  
  for (let i = 0; i < min(history.length, width); i++) {
    line(width - i, height - history[history.length - 1 - i]/12500, width - i, height);
  }
  noStroke();
  text("max. fitness = " + history[history.length - 1], width - 140, 40);
  
  let recipe_text = population[0].name + "\n";
  for (let i of population[0].ingredients) {
    recipe_text += "\n" + i.amount + i.unit + " " + i.ingredient;
  }
  text(recipe_text, 30, 30);
}


function getName() {
  let adv = random(adverbs);
  let adj = random(adjectives);
  let cake = random(pastries);
  name = adv + " " + adj + " " + cake;
  return name;
}



function crossoverRecipes(r1, r2) {
  // choose crossover point in r1
  let p1 = int(random(r1.ingredients.length));
  // choose crossover point in r2
  let p2 = int(random(r2.ingredients.length));
  // get first ingredient sublist from r1
  let r1a = r1.ingredients.slice(0, p1);
  // get second ingredient sublist from r2
  let r2b = r2.ingredients.slice(p2);
  // create a new recipe
  let r = {};
  // add a default name
  r.name = getName() + " recipe"; 
  // add ingredients from sublists
  r.ingredients = r1a.concat(r2b);
  return r;
}

function mutateRecipe(r) {
  switch (int(random(4))) {
    case 0:
      // select a random ingredient
      let i = int(random(r.ingredients.length));
      // make a copy of the ingredient
      r.ingredients[i] = Object.assign({}, r.ingredients[i]);
      // change the amount of the ingredient by a small amount
      r.ingredients[i].amount += int(r.ingredients[i].amount * 0.1);
      // check that the amount is at least 1
      r.ingredients[i].amount = max(1, r.ingredients[i].amount);
      break;
    case 1:
      // select a random ingredient
      let j = random(r.ingredients.length);
      // make a copy of the ingredient
      r.ingredients[j] = Object.assign({}, r.ingredients[j]);
      // change the ingredient by selecting from all ingredients
      r.ingredients[j].ingredient = random(allIngredients).ingredient;
      break;
    case 2:
      // add an ingredient from all ingredients
      r.ingredients.push(random(allIngredients));
      break;
    case 3:
          // remove an ingredient
      if (r.ingredients.length > 1) {
        r.ingredients.splice(random(r.ingredients.length), 1);
      }
      break;
  }
}

function normaliseRecipe(r) {
  // before normalising the ingredient amounts
  // reformulate the recipe into unique ingredients
  let uniqueIngredientMap = new Map();
  for (const i of r.ingredients) {
    // if the map already has the ingredient add the amount
    if (uniqueIngredientMap.has(i.ingredient)) {
      let n = uniqueIngredientMap.get(i.ingredient);
      n.amount += i.amount;
    } else { // otherwise add a copy of the ingredient
      uniqueIngredientMap.set(i.ingredient, Object.assign({}, i));
    }
  }
  r.ingredients = Array.from(uniqueIngredientMap.values());
  
  // calculate the sum of all of the ingredient amounts
  let sum = r.ingredients.reduce((a, i) => a + i.amount, 0);
  // calculate the scaling factor to 1L of soup (ingredients)
  let scale = 1000 / sum;
  // rescale all of the ingredient amounts
  for (let i of r.ingredients) {
    i.amount = max(1, int(i.amount * scale));
  }
}