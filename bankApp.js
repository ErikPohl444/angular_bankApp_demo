<div ng-app="bankApp">
  <ul ng-controller="balancesController">
    <li ng-repeat="user in users | orderBy: 'balance'">
      {{user.name | uppercase}} - {{user.balance | currency}}
      <a href="#" ng-click="remove(user)">Delete</a>
      <a href="#" ng-click="edit(user)">Edit</a>
    </li>
    <li> <input type="text" id="name" ng-model="current.name" value="{{current.name}}"></li>
    <li> <input type="text" id="balance" ng-model="current.balance" value="{{current.balance}}"></li>
    <li>
      <button ng-click="save(current)">Save</button>    
      <button ng-click="addNew(current)">Add new user</button>
    </li>
  </ul>
</div>