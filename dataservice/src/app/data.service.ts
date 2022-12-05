export class DataService{
  users = [
    {name:"Imran", status:"Inactive"},
    {name:"Thaseena", status:"Active"},
    {name:"Afrin", status:"Active"},
    {name:"Mohammed", status:"Inactive"},
    {name:"Malik", status:"Active"}
  ]

  addUsers(name: string, status: string){
    this.users.push({name : name, status : status});
  }
}
