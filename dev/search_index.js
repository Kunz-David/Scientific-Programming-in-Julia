var documenterSearchIndex = {"docs":
[{"location":"lecture_01/outline/#Course-outline","page":"Outline","title":"Course outline","text":"","category":"section"},{"location":"lecture_01/outline/","page":"Outline","title":"Outline","text":"type system\nuser: tool for abstraction\ncompiler: tool for memory layout\ndesign patterns (mental setup)\njulia is a type-based language\ngeneralizes OOP and FP\nPackages\nway how to organize code\ncode reuse (alternative to libraries)\nexperiment reproducibility\n","category":"page"},{"location":"lecture_01/outline/#How-to-write-fast-code:","page":"Outline","title":"How to write fast code:","text":"","category":"section"},{"location":"lecture_01/outline/","page":"Outline","title":"Outline","text":"(Image: )","category":"page"},{"location":"lecture_01/outline/","page":"Outline","title":"Outline","text":"cache misses.","category":"page"},{"location":"lecture_01/outline/#Syntax","page":"Outline","title":"Syntax","text":"","category":"section"},{"location":"lecture_01/outline/","page":"Outline","title":"Outline","text":"Syntactic Sugar: Cheat sheet: https://cheatsheets.quantecon.org/","category":"page"},{"location":"lecture_01/outline/#Typing-Lecture-2","page":"Outline","title":"Typing -> Lecture 2","text":"","category":"section"},{"location":"lecture_01/outline/","page":"Outline","title":"Outline","text":"static\ndynamic","category":"page"},{"location":"lecture_01/outline/#","page":"Outline","title":"","text":"","category":"section"},{"location":"howto/#How-to-use-admonitions","page":"How To ...","title":"How to use admonitions","text":"","category":"section"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Documenter.jl provides five special styles for admonitions and one style for custom admonition types","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Admonition type html class\ninfo \"admonition is-info\"\ncompat \"admonition is-compat\"\ndange \"admonition is-danger\"\nwarning \"admonition is-warning\"\ntip \"admonition is-success\"\ncustom \"admonition is-category-custom\"","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"All these admonitions can be used in the following way","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"!!! tip \"Header\"\n    Text ...\n    ```@repl\n    a = 1\n    b = 2\n    a + b\n    ```","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"The resulting admonition looks as follows","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"tip: Header\nText ...a = 1\nb = 2\na + b","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"The problem is, that the evaluation of the block of code inside admonitions is not currently supported. To allow code evaluation inside admonitions, we can use two raw HTML blocks to wrap the admonition body. The syntax of the code between the HTML block is the same as everywhere else in the document.","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"```@raw html\n<div class=\"admonition is-success\">\n<header class=\"admonition-header\">Header</header>\n<div class=\"admonition-body\">\n```\n\nText ...\n\n```@repl\na = 1\nb = 2\na + b\n```\n\n```@raw html\n</div></div>\n```","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"The resulting admonition then looks as follows","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"<div class=\"admonition is-success\">\n<header class=\"admonition-header\">Header</header>\n<div class=\"admonition-body\">","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Text ...","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"a = 1\nb = 2\na + b","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"</div></div>","category":"page"},{"location":"howto/#Additional-admonition-types","page":"How To ...","title":"Additional admonition types","text":"","category":"section"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"The css style downloaded in the make.jl provides three additional admonition types","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Admonition type html class\ntheorem \"admonition is-category-theorem\"\nexercise \"admonition is-category-exercise\"\nhomework \"admonition is-category-homework\"","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Currently, the first two types use the style of the default admonitions types. However, it may change in the future.","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"theorem: Theorem\nText...","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"exercise: Exercise\nText...","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"homework: Homework\nText...","category":"page"},{"location":"howto/#Exercise-with-solution","page":"How To ...","title":"Exercise with solution","text":"","category":"section"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"The used css style also provides style for collapsible admonition that can be used for example to define exercise with the hidden solution. To use this feature, we have to use raw HTML blocks.","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"```@raw html\n<div class=\"admonition is-category-exercise\">\n<header class=\"admonition-header\">Header</header>\n<div class=\"admonition-body\">\n```\n\nSome text that describes the exercise\n\n```@raw html\n</div></div>\n<details class = \"solution-body\">\n<summary class = \"solution-header\">Solution:</summary><p>\n```\n\nSolution\n\n```@raw html\n</p></details>\n```","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"The result is following","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"<div class=\"admonition is-category-exercise\">\n<header class=\"admonition-header\">Header</header>\n<div class=\"admonition-body\">","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Some text that describes the exercise","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"</div></div>\n<details class = \"solution-body\">\n<summary class = \"solution-header\">Solution:</summary><p>","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"Solution","category":"page"},{"location":"howto/","page":"How To ...","title":"How To ...","text":"</p></details>","category":"page"},{"location":"lecture_01/hw/#Homework-1","page":"HOMEWORK","title":"Homework 1","text":"","category":"section"},{"location":"lecture_01/hw/#Assignment-1-(2-points)","page":"HOMEWORK","title":"Assignment 1 (2 points)","text":"","category":"section"},{"location":"lecture_01/hw/#Assignment-2-(4-points)","page":"HOMEWORK","title":"Assignment 2 (4 points)","text":"","category":"section"},{"location":"lecture_01/hw/","page":"HOMEWORK","title":"HOMEWORK","text":"...","category":"page"},{"location":"lecture_01/hw/#How-to-submit?","page":"HOMEWORK","title":"How to submit?","text":"","category":"section"},{"location":"lecture_01/hw/","page":"HOMEWORK","title":"HOMEWORK","text":"The guide is located here","category":"page"},{"location":"lecture_02/lecture/#Motivation","page":"Motivation","title":"Motivation","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Before going into details about Julia type system, we spent few minutes motivating the two main role of type system, which is (i) structuring the code and (ii) and communicating to the compiler your intentions how the type will be used. While the first aspect is very important for the convenience of programmer and possible abstraction in the language, the latter aspect is very important for speed. ","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"What Wikipedia tells about type and type system?","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"In computer science and computer programming, a data type or simply type is an attribute of data which tells the compiler or interpreter how the programmer intends to use the data (see (Image: wiki)). ","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"A type system is a logical system comprising a set of rules that assigns a property called a type to the various constructs of a computer program, such as variables, expressions, functions or modules.[1] These types formalize and enforce the otherwise implicit categories the programmer uses for algebraic data types, data structures, or other components (see (Image: wiki)).","category":"page"},{"location":"lecture_02/lecture/#Structuring-the-code","page":"Motivation","title":"Structuring the code","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"The main role is therefore aiding help to structure the code and impose semantic restriction. Consider for example two types with the same definition but different names.","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"struct Dog\n\tname::String\nend\n\nstruct Cat\n\tname::String\nend","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"This allows us to define functions applicable only to the corresponding type","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"bark(dog::Dog) = println(dog.name, \" has barked.\")\nmeow(cat::Cat) = println(cat.name, \" have meowed.\")","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"and therefore the compiler (or interpretter) enforces that dog can only bark and never meow and vice versa can cat only meow. In this sense, it ensures that bark(cat) and meow(dog) never happen. Unlike if we define  those functions as ","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"bark(dog::String) = println(dog.name, \" has barked.\")\nmeow(cat::String) = println(cat.name, \" have meowed.\")","category":"page"},{"location":"lecture_02/lecture/#Intention-of-use-and-restrictions-on-compilers","page":"Motivation","title":"Intention of use and restrictions on compilers","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"The intention of use in types is tightly related to how efficient code can compiler produce for that given intention. As an example, consider a following two variables a and b and function inc which increments the content by one and return the array.","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"a = [1, 2, 3]\nb = (1, 2, 3)\ninc(x) = x .+ 1","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"The variable a is an array of Int64s, whereas b is a Tuple of Int64. Now if we look, how compiler compiles each version, you will see a striking difference","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"@code_native inc(a)\n@code_native inc(b)","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"On my i5-8279U CPU, the difference is visible in performance","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"using BenchmarkTools\njulia> @btime inc($(a));\n  36.779 ns (1 allocation: 112 bytes)\n\njulia> @btime inc($(b));\n  0.036 ns (0 allocations: 0 bytes)","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"(as will be seen later, the difference in speed comes mainly from the memory allocation).  For fun you can also test the speed of not type stable code","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"c = Vector{Number}([1, 2, 3])\njulia> @btime inc($(c));\n  865.304 ns (9 allocations: 464 bytes)","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Does it mean that we should always use Tuples instead of Arrays, it is just that each is better for different use-case. Arrays allows us to reuse the space, for example","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"inc!(x) = x .= x .+ 1","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"will work for a but not for b, as Tuples are \"immutable\". This gives the compiler freedom to allocate them where he wishes (typically on Stack), while arrays are (at the time of writing) allocated strinctly on heap (needless to say that non-allocating version inc! of inc is much faster).","category":"page"},{"location":"lecture_02/lecture/#The-type-system","page":"Motivation","title":"The type system","text":"","category":"section"},{"location":"lecture_02/lecture/#The-power-of-Type-System-\\-and-multiple-dispatch","page":"Motivation","title":"The power of Type System \\& multiple dispatch","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Zero cost abstraction the compiler has information about types and can freely inline x |> identity |> identity |> identity |> identity |> identity","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"julia> f(x) = x |> identity |> identity |> identity |> identity |> identity\n@code_lowered f(1)\n@code_lowered f(1)","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Why the type system is important for efficiency\nBad practices \nLABS:\nNumber type-tree\nDesign Interval Aritmetics (for ODES)","category":"page"},{"location":"lecture_02/lecture/#VS-NOtes:","page":"Motivation","title":"VS NOtes:","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Basics:","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"type hierarchy\nsubtyping\nUnions","category":"page"},{"location":"lecture_02/lecture/#Pevnak's-idea","page":"Motivation","title":"Pevnak's idea","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Type hierarchy and rationale behind","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"* Why I cannot create an abstract struct with fields.\n* Why a type cannot subtype more than one types\n* How the type matching system works and what are the rules (Would take Jan Vitek's lecture or earlier) https://youtu.be/Y95fAipREHQ?t=958c","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"What types do in practice and how it matters?","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"* Allow to structure the program (example two types with the same memory layout (even empty) specializes methods)\n* Provides an information how to arrange variables in computer memory\n* Inform compiler how things can be stored (possibly on stack (bit types) vs strictly on heap (arrays))\n* Inform compiler about what is known (mutable vs non-mutable structs). Explain that when things are mutable, they have to be \"boxed\", meaning the variable is on stack and the structure contains pointer. \n* The effect of not strictly typed structs, where the type inference of objects is left to runtime","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Performance gotchas","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"- Why global is slow and how `const` comes to rescue","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Show the above with @codetyped, @codenative and @btime the effects, such that they can see that.","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Stefans's C++ example of overloading https://discourse.julialang.org/t/claim-false-julia-isnt-multiple-dispatch-but-overloading/42370/16","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"_ Discussion about multiple inheritance https://github.com/JuliaLang/julia/issues/5","category":"page"},{"location":"lecture_02/lecture/#Examples","page":"Motivation","title":"Examples","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"why Vector{AbstractFloat} is a bad idea, while Vector{Float64} is a good one?\nwhy Vector{AbstractFloat} is different to Vector{<:AbstractFloat} or Vector{T} where {T<:AbstractFloat} ","category":"page"},{"location":"lecture_02/lecture/#Why-[1,2,3]-is-not-a-Vector{Number}","page":"Motivation","title":"Why [1,2,3] is not a Vector{Number}","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Vector{Number} is a concrete type, and [1, 2, 3] has type Vector{Int}, which is also a concrete type. One concrete type is never a subtype of another concrete type, they are the leaves of the type tree.","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Vector{Number} is concrete, even though Number is not a concrete type. That’s because it has a concrete implementation which can store all types that are subtypes of Number, it has a specific memory layout etc. On the other hand, AbstractVector{Int} is the other way around and not a concrete type, because the container is abstract even though the element is concrete.","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"What you can do instead is [1, 2, 3] isa Vector{<:Number} which is true. That’s because <:Number is a sort of placeholder which means “any type which is a subtype of Number”. This is often needed for dispatching on containers where you want to allow set of element types. f(x::Vector{Number}) can take only arguments of type Vector{Number}, whereas g(x::Vector{<:Number}) can take e.g. Vector{Int}, Vector{Float64}, Vector{Real}, Vector{Number}, etc.","category":"page"},{"location":"lecture_02/lecture/#Optional-stuff","page":"Motivation","title":"Optional stuff","text":"","category":"section"},{"location":"lecture_02/lecture/#Alignment-in-the-memory","page":"Motivation","title":"Alignment in the memory","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"Super-importnat for speed, cache utilization\nKnow if you are row or column major \nVector{Vector{Float}} is a really bad idea over ","category":"page"},{"location":"lecture_02/lecture/#A-Headache-examples","page":"Motivation","title":"A Headache examples","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"This is a great example for type resolution.","category":"page"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"function Base.reduce(::typeof(hcat), xs::Vector{TV})  where {T, L, TV<:OneHotLike{T, L}}\n  OneHotMatrix(reduce(vcat, map(_indices, xs)), L)\nend","category":"page"},{"location":"lecture_02/lecture/#Turning-multiple-distpatch-to-single-dispatch","page":"Motivation","title":"Turning multiple-distpatch to single dispatch","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"https://stackoverflow.com/questions/39133424/how-to-create-a-single-dispatch-object-oriented-class-in-julia-that-behaves-l/39150509#39150509","category":"page"},{"location":"lecture_02/lecture/#conversion-among-variables","page":"Motivation","title":"conversion among variables","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"reinterpret(Float32, ref_sketch)","category":"page"},{"location":"lecture_02/lecture/#Trivia","page":"Motivation","title":"Trivia","text":"","category":"section"},{"location":"lecture_02/lecture/","page":"Motivation","title":"Motivation","text":"why this is true Vector{Int} <: AbstractVector{<:Any} why this is false Vector{Int} <: Vector{Any} why this is true Vector{Int} <: Vector{<:Any}","category":"page"},{"location":"lecture_02/lab/#Lab-02:-Predator-Prey-Agents","page":"Lab","title":"Lab 02: Predator-Prey Agents","text":"","category":"section"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"To practice Julia's multiple dispatch you will implement your own, simplified, agent-based simulation of a predator-prey model.  The model will contain wolves, sheep, and - to feed your sheep - some grass. Your final result could look something like the plot below.","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"(Image: img)","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"As you can see, in this model, the wolves unfortunately died out :(.","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"To get started we need a type hierarchy. In order to be able to extend this model in later lectures we will structure them like this","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"abstract type AbstractAgent end\nabstract type AbstractAnimal <: AbstractAgent end\nabstract type AbstractPlant <: AbstractAgent end","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"Our Grass will be growing over time and it will need a certain amount of time steps to fully grow such that it can be eaten. This has to be reflected in the fields of our grass struct:","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"mutable struct Grass <: AbstractPlant\n    fully_grown::Bool\n    regrowth_time::Int\n    countdown::Int\nend\nGrass(t) = Grass(true,t,t)","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"Most of the logic of our agent simulation will be located in the function agent_step!(::AbstractAgent, ::World). Grass cannot grow in a void, hence we need the World in the agent_step!. In our case this world will be simply a container for all our agents.","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"<div class=\"admonition is-category-exercise\">\n<header class=\"admonition-header\">Header</header>\n<div class=\"admonition-body\">","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"Define a World struct that will hold all your AbstractAgents in a Vector. Try to avoid fields with abstract types. Julia's compiler will not be able to infer the type for those (which leads to type instabilities and performance losses).","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"TODO: linking to the lecture would be nice here.","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"After that, implement the agent_step! method for Grass. It should decrease the countdown until the Grass is fully grown.","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"</div></div>\n<details class = \"solution-body\">\n<summary class = \"solution-header\">Solution:</summary><p>","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"struct World{V<:Vector{<:AbstractAgent}}\n    agents::V\nend\n\nfunction agent_step!(a::Grass, w::World)\n    if !a.fully_grown\n        if a.countdown <= 0\n            a.fully_grown = true\n            a.countdown = a.regrowth_time\n        else\n            a.countdown -= 1\n        end\n    end\nend","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"</p></details>","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"Now you should be able to create a world and grow some grass!","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"grass = Grass(false,2,2)\nworld = World([grass])\n\nagent_step!(grass, world)\nagent_step!(grass, world)","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"And so on and so forth. Probably first create agent_step! just for Sheep then generalize to AbstractAnimal. Not sure if this is the best example. The only parts that make use of dispatch are eats! and agent_step!...","category":"page"},{"location":"lecture_02/lab/","page":"Lab","title":"Lab","text":"mutable struct Sheep{T<:Real} <: AbstractAnimal\n    energy::T\n    Δenergy::T\n    reproduction_prob::T\n    food_prob::T\nend\nSheep() = Sheep(10.0, 5.0, 0.5)\n\nmutable struct Wolf{T<:Real} <: AbstractAnimal\n    energy::T\n    Δenergy::T\n    reproduction_prob::T\n    food_prob::T\nend\nWolf() = Wolf(10.0, 2.0, 0.01)\n\nfunction agent_step!(a::Grass, w::World)\n    if !a.fully_grown\n        if a.countdown <= 0\n            a.fully_grown = true\n            a.countdown = a.regrowth_time\n        else\n            a.countdown -= 1\n        end\n    end\n    return a\nend\n\nfunction agent_step!(a::A, w::World) where A<:AbstractAnimal\n    a.energy -= 1\n    dinner = find_food(a,w)\n    eat!(a, dinner, w)\n    if a.energy < 0\n        kill_agent!(a,w)\n        return\n    end\n    if rand() <= a.reproduction_prob\n        reproduce!(a,w)\n    end\n    return a\nend\n\nfunction find_food(a::T, w::World) where T<:AbstractAnimal\n    if rand() <= a.food_prob\n        as = filter(x->isa(x,eats(T)), w.agents)\n        isempty(as) ? nothing : sample(as)\n    end\nend\n\neats(::Type{<:Sheep}) = Grass\neats(::Type{<:Wolf}) = Sheep\n\nfunction eat!(wolf::Wolf, sheep::Sheep, w::World)\n    kill_agent!(sheep,w)\n    wolf.energy += wolf.Δenergy\nend\nfunction eat!(sheep::Sheep, grass::Grass, w::World)\n    if grass.fully_grown\n        grass.fully_grown = false\n        sheep.energy += sheep.Δenergy\n    end\nend\neat!(a,b,w) = nothing\n\nfunction reproduce!(a::AbstractAnimal, w::World)\n    a.energy /= 2\n    push!(w.agents, deepcopy(a))\nend\n\nkill_agent!(a::AbstractAnimal, w::World) = deleteat!(w.agents, findall(x->x==a, w.agents))","category":"page"},{"location":"lecture_01/motivation/#Introduction-to-Scientific-Programming","page":"Motivation","title":"Introduction to Scientific Programming","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Loose def: a scientific programming language is designed and optimized for the use of mathematical formula and matrices wiki","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Examples of Scientific programming languages include ALGOL, APL, Fortran, J, Julia, Maple, MATLAB and R.","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Key requirements:","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"fast execution of the code (complex algorithms)\nease of code reuse / restructuring \nreproducibility of the results","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Contrast to general-purpose language:","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"less concern with business models (library + header files)\nless concern with ABI \nless concern with public/private separation","category":"page"},{"location":"lecture_01/motivation/#TODO","page":"Motivation","title":"TODO","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Zero cost abstraction - Rackcaucas","category":"page"},{"location":"lecture_01/motivation/#Example","page":"Motivation","title":"Example","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"In many applications, we encounter the task of optimization a function given by a routine (e.g. engineering, finance, etc.)","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"using Optim\n\nP(x,y) = x^2 - 3x*y + 5y^2 - 7y + 3   # user defined function\n\nz₀ = [ 0.0\n       0.0 ]     # starting point for optimization algorithm\n\noptimize(z -> P(z...), z₀, Newton())\n#optimize(z -> P(z...), z₀, Newton();autodiff = :forward)\n#optimize(z -> P(z...), z₀, ConjugateGradient())\n","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Very simple for a user, very complicated for a programmer. The program should:","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"pick the right optimization method (easy by config-like approach)\ncompute gradient (Hessian) of a user function","category":"page"},{"location":"lecture_01/motivation/#Classical-thinking:-create-a-library,-call-it.","page":"Motivation","title":"Classical thinking: create a library, call it.","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Think of an experiment: main taking a configuration file. The configuration file can be simple: input file, what to do with it, output file.","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"The more complicated experiments you want to do, the more complex your configuration file becomes. Sooner or later, you will create a new configuration language, or scripting language.","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Ending up in 2 language problem. ","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Low-level programming = computer centric\nclose to the hardware\nallows excellent optimization for fast execution\nHigh-level programming = user centric\nexperimenting = running multiple configurations\nrunning code with many different parameters as easily as possible\nallowing high level of abstraction","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"In scientific programming, the most well known scipting languages are: Python,  Matlab, R","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"If you care about standard \"configurations\" they are just perfect. \nYou hit a problem with more complex experiments. ","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"The scripting language typically makes decisions (if) at runtime. Becomes slow.","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"(Image: )","category":"page"},{"location":"lecture_01/motivation/#Other-approaches","page":"Motivation","title":"Other approaches","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Just in time compilation (HL -> LL)\nautomatic typing (auto in C++) (LL->HL)","category":"page"},{"location":"lecture_01/motivation/#Challenge","page":"Motivation","title":"Challenge","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Translate high-level thinking with as much abstraction as possible into fast machine code.","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Indexing array x in Matlab:","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"y=x(4/2)\ny=x(5/2)","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"In the first case it works, in the second throws an error.","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"function inde(x,n,m), x(n/m) can never be fast.","category":"page"},{"location":"lecture_01/motivation/#Julia-way","page":"Motivation","title":"Julia way","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"strong but flexible type system\nmultiple dispatch\nsingle language from high to low levels (as much as possible)\noptimize execution as much as you can during runtime\nfunctions are symbolic abstract layers\nabstraction should have zero computational cost","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"(Image: )","category":"page"},{"location":"lecture_01/motivation/#Example:","page":"Motivation","title":"Example:","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Function recursion with arbitrary number of arguments:","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"fsum(x::Number) = x\nfsum(x::Number,p...) = x+fsum(p[1],p[2:end]...)\n\nfsum(1,2,3)\n@code_llvm fsum(1,2,3)\n@code_llvm fsum(1.0,2.0,3.0)\nfz()=fsum(1,2,3)\n@code_llvm fz()","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"More involved example:","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"using Zygote\n\nf(x)=3x+1\n@code_llvm f'(10)","category":"page"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"Fuctions can act eiter as regular functions or like templates in C++.","category":"page"},{"location":"lecture_01/motivation/#Advantages-and-disadvantages","page":"Motivation","title":"Advantages and disadvantages","text":"","category":"section"},{"location":"lecture_01/motivation/","page":"Motivation","title":"Motivation","text":"compilation of everything to \nvery fast code\nslow interaction (caching...)\ngenerating libraries is harder \nthink of fsum, \neverything is \".h\" file\ndebugging will be harder\nMultiple dispatch\nallows great extensibility and code composition\nnot (yet) mainstream thinking","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Scientific_Programming_in_Julia","category":"page"},{"location":"","page":"Home","title":"Home","text":"<img class=\"docs-light-only\"; src=\"https://raw.githubusercontent.com/JuliaTeachingCTU/JuliaCTUGraphics/master/logo/Scientific-Programming-in-Julia-logo.svg\"; alt=\"Julia for Machine Learning logo\"; max-width: 100%; height: auto>\n<img class=\"docs-dark-only\"; src=\"https://raw.githubusercontent.com/JuliaTeachingCTU/JuliaCTUGraphics/master/logo/Scientific-Programming-in-Julia-logo-dark.svg\"; alt=\"Julia for Machine Learning logo\"; max-width: 100%; height: auto;>","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Documentation for the course Scientific Programming in Julia.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [Scientific_Programming_in_Julia]","category":"page"},{"location":"lecture_01/labs/#Laboratory-session-1","page":"LABS","title":"Laboratory session 1","text":"","category":"section"},{"location":"lecture_01/labs/#Testing-Julia-instalation","page":"LABS","title":"Testing Julia instalation","text":"","category":"section"},{"location":"lecture_01/labs/","page":"LABS","title":"LABS","text":"Make sure that everyone can participate with in the labs","category":"page"},{"location":"lecture_01/labs/#Variables-and-data-structures","page":"LABS","title":"Variables & data structures","text":"","category":"section"},{"location":"lecture_01/labs/","page":"LABS","title":"LABS","text":"Defining both simple and not so simple variables","category":"page"},{"location":"lecture_01/labs/#Functions-and-Methods","page":"LABS","title":"Functions & Methods","text":"","category":"section"},{"location":"lecture_01/labs/#Control-Flow","page":"LABS","title":"Control Flow","text":"","category":"section"},{"location":"lecture_01/labs/","page":"LABS","title":"LABS","text":"Conditional evaluation, loops and iteration, scoping, exceptions","category":"page"},{"location":"lecture_01/labs/#Useful-resources","page":"LABS","title":"Useful resources","text":"","category":"section"},{"location":"lecture_01/labs/","page":"LABS","title":"LABS","text":"MATLAB x Python x Julia","category":"page"},{"location":"how_to_submit_hw/#homeworks","page":"How to submit homeworks","title":"Homework submission","text":"","category":"section"},{"location":"how_to_submit_hw/","page":"How to submit homeworks","title":"How to submit homeworks","text":"This document should describe the homework submission procedure.","category":"page"}]
}
