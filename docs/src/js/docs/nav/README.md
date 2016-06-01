# Navigation

Rich offers two types of navigation: `RichNav` and `RichSideNav`.

The `RichNav` component is your typical top navigation bar. By default, everything is centered. `RichNav` also supports `NavLeft` and `NavRight` child components that will left-justify or right-justify the `NavItem` components.

The `RichSideNav` component is a side navigation that is `position: fixed` on the side of your screen.

## RichNav

```javascript
<RichNav height=90>
  /**
   * Rich nav accepts a height prop that sets the height of the navigation in pixels
   */
</RichNav>
```

## RichSideNav

```javascript
<RichSideNav header="SideNav" href="/link">
  /**
   * Header - Optional header item that will add a .rich-side-nav-header class to the item
   * href - Destination link for the header component
   */
</RichSideNav>
```

## NavLeft

This specifies those items that you want left justified on the nav bar.

```javascript
<RichNav height=90>
  <NavLeft>
    //...
  </NavLeft>
</RichNav>
```

## NavRight

This specifies those items that you want right justified on the nav bar.

```javascript
<RichNav height=90>
  <NavRight>
    //...
  </NavRight>
</RichNav>
```

## NavItem

Each navigation button in the nav bar can be defined using the `NavItem` component.

```javascript
<RichNav height=90>
  <NavItem href="/link/to/1">1</NavItem> //href prop is destination of the nav item
  <NavItem href="/link/to/2">2</NavItem>
  <NavItem href="/link/to/3">3</NavItem>
</RichNav>
```
