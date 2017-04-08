# FlatMenuVertical

Simple version of MegaMenu customized for my needs.

## Types

````javascript
export interface MenuItem {
    label?: string;
    icon?: string;
    command?: (event?: any) => void;
    url?: string;
    routerLink?: any;
    eventEmitter?: EventEmitter<any>;
    items?: MenuItem[];
    expanded?: boolean;
    disabled?: boolean;
    visible?: boolean;
    target?: string;
    image?: string;
}
````

## Properties

`menuItems` - an array of menu items of type `MenuItem`

`rootHoverClass` - string, a CSS class which will be added to the item of the root tree, when the the mouse is over the item and the show panel.
 There is a need of having this class, if you want to persist the mouse over effect while moving over show panel.
 
 `fixedTop` - boolean (default false), if set to true, the upper edge of show panel does not follow the muse, but stays fixed at the top of the root tree.
 
 `depth` - number (default 2), the maximal depth of subitems. If set to 0, no menu will appear.
 
 ## Example of HTML code
 
 ````html
 <flat-menu-vertical [depth]="3" [menuItems]="items" [rootHoverClass]="'root-hover-class'" [fixedTop]="false"></flat-menu-vertical>
 ````



