# Gilded Rose Refactoring Kata

This is my solution to the Gilded Rose tech test using Javascript. It is a simple stock inventory tracking tool used by the Gilded Rose shop to automatically update they quality of their items, including items with unique behaviors.

The full instructions for this test can be found [here](https://github.com/emilybache/GildedRose-Refactoring-Kata).

*Tags: Javascript, Jasmine, TDD, OOP*

## Using the app

### Install

```
$ git clone https://github.com/Lucx14/GildedRose-Refactoring-Kata.git
$ cd GildedRose-Refactoring-Kata
$ (Open in your favorite editor)
```

### Use

To see the app working open `TexttestFixture.html`. This is what the store uses to display and record the name, quality and sellIn days of each product in stock.

### Tests

The app is tested using the Jasmine testing library, to view the test output, open `SpecRunner.html`. Currently there are 58 tests, all passing.

## Specification

    - All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item
    - Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert
    - "Conjured" items degrade in Quality twice as fast as normal items

## Process

* Read and understand the specification
* For the existing code, write a full set of tests covering behaviour of all stock items
* Decide to extract the Item class to its own file and begin extending the class with subclasses that would represent the subcategories of Item with their unique behaviours. 
* Add the final requested category of Conjured items.
* As requested by the shop owner the Item class and Item properties are unchanged
* Delete all the existing code inside the shop classes updateQuality() function
* Refactor tests to have both feature tests and unit tests
* Start to add a 3 functions that will build a new array in the shop class that will properly categorize all items the shop has in stock
* Use these to create a new updateQuality() function
* Make all functions in Shop class private except for updateQuality()
