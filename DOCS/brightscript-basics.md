# BrightScript
___


* NO classes & inheritance
* ONE GLOBAL VAR "m"
* ARRAYS = 1 DIMENSIONAL
> can have arrays of arrays

* For / END For / Exit for
* While / End While / Exit While
* If / Then / Else (If) / End If

### ARRAYS
> roArray & roAssociativeArray

```BrightScript
// expandable array containing 5 elements
varname = createobject(roArray,5,true)
//or
varname=[]

varname[0]=100
varname[1]="wow"
//or
varname=[100,"wow"]
```

```BrightScript
// AssociativeArrays aka data dictionaries
varname = createobject(roAssociativeArray)
//or
varname={}

varname={name:"lucy", msg:"well this is obvious"}
//or
varname["name"]="lucy"
varname["msg"]="well this is obvious too!"
```

###  BrightScript's specialist objects

>Example how it works w/ roPosterScreen -

```BrightScript

screen=CreateObject("roPosterScreen")

item1={ShortDescriptionLine1:"item 1"}
item2={ShortDescriptionLine2:"item 2"}
item3={ShortDescriptionLine3:"item 3"}

content=[item1,item2,item3]

screen.setcontentlist(content)

//display screen
screen.show()

```

```BrightScript

'this is a comment using a single quote

```
