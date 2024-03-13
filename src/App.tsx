import React from 'react'
import './App.css'

function App() {
  return (

    <div>
        <img src="../public/images/image-omelette.jpeg"/>

      <h1>Simple Omelette Recipe</h1>
      <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggscooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
      <dock>
        <ul>
          <h3>Preparation time</h3>
          <li><b>Total:</b> Approximately 10 minutes</li>
          <li><b>Preparation:</b> 5 minutes</li>
          <li><b>Cooking:</b> 5 minutes</li>
        </ul>
      </dock>
      <h2>Ingredients</h2>
      <ul>
        <li>2-3 large eggs</li>
        <li>Salt, to taste</li>
        <li>Pepper, to taste</li>
        <li>1 tablespoon of butter or oil</li>
        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
      </ul>
      
      <hr />

      <h2>Instructions</h2>

    <ol type="1">
        <li><p><b> Beat the eggs:</b> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p>  </li>
        <li> <p><b>Heat the pan:</b>  Place a non-stick frying pan over medium heat and add butter or oil.</p> </li>
        <li><p><b>Cook the omelette:</b>  Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p> </li>
        <li> <p><b>Add fillings (optional):</b>  When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p></li>
        <li><p><b>Fold and serve:</b>  As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</p>  </li>
        <li><p><b>Enjoy:</b>  Serve hot, with additional salt and pepper if needed.</p></li>
     </ol>  

    <hr />

      <h2>Nutrition</h2>

      <ul>
         <p>Calories <strong>277kcal</strong></p> <hr />   
           <p>Carbs &emsp;<strong>0g</strong> </p> <hr />    
           <p>Protein &ensp;<strong>22g</strong> </p> <hr />    
           <p>Fat &emsp;&emsp;&nbsp;<strong>20g</strong> </p> <hr />    
      </ul>
        
    </div>
     
 
  )
}

export default App
