## Project File Structure Guide

----------------------

Project structure is as follows:

>PROJECT
> >documentation
> 
> >public
> 
> >src
> > >assets
> >
> > >components
> > > >atoms
> > >
> > > >molecules
> > >
> > > >pageComponents
> >
> > >constants
> >
> > >hooks
> > 
> > > logics
> >
> > > api
> > 
> > > pages
> >
> > > redux
> > 
> > App.js
> >
> > index.js
> >
> >App.css
> >
> >index.css
> >
> > ...
> 
> ...

----------------
### Explanation
Main structuring has to be done in src folder.

### `pages`
Application have different routes, and these routes render pages accordingly.
Note that components should not be used as routes. Pages should assemble components to make ui

pages folder should only have well named pages js files. styles of pages should go in styles folder.

-------------
### `components`
components are the ui building block of pages.  
components are divided into three parts : 
> `atoms`
> 
> atoms are the most basic components of the application. Buttons, text areas, and other small components will come into category of atoms.
> 
> atoms will combine to make molecules

> `molecules`
> 
> molecules are combination of atoms. molecules are the reusable components with can be used in any page component.
> 
> Most basic difference between molecules and pageComponents is that molecules are reusable in any pageComponent, but pageComponents are specific components of pages.
> 
> molecules and atoms will combine to make pageComponents.

> `pageComponents`
> 
> page components are the combination of atoms and molecules.
> 
> Structure pageComponents according to the pages. make folder for every page and structure pageComponent specific ui, css and logic in that folder.
> 
> pageComponent specific css should not go in styles folder or anywhere except its own respective folder.

----------------
### `styles`
styles folder should only contain global and reusable styles. Stylesheets of specific pages should also be arranged in this folder.

styles of specific component should go in its own specific folder.

--------------
### `logics`
logics folder should contain business logics.  
It is very important to name the files very appropriately, or it will create confusion when we will scale up.

logics folder should not contain api calls. That should go in api folder

----------------
### `api`
api calls should come in this folder.
