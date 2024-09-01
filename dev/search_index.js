var documenterSearchIndex = {"docs":
[{"location":"gettingstarted/#Getting-Started","page":"Getting Started","title":"Getting Started","text":"","category":"section"},{"location":"examples/#Examples","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"#RootIO.jl-Documentation","page":"RootIO.jl Documentation","title":"RootIO.jl Documentation","text":"","category":"section"},{"location":"","page":"RootIO.jl Documentation","title":"RootIO.jl Documentation","text":"","category":"page"},{"location":"typesandmethods/#Types-and-Methods","page":"Types & Methods","title":"Types & Methods","text":"","category":"section"},{"location":"typesandmethods/","page":"Types & Methods","title":"Types & Methods","text":"Modules = [RootIO]\nOrder   = [:type, :function]","category":"page"},{"location":"typesandmethods/#RootIO.TTree","page":"Types & Methods","title":"RootIO.TTree","text":"struct TTree\n\nA struct representing a ROOT TTree with its associated branches and file.\n\n\n\n\n\n","category":"type"},{"location":"typesandmethods/#RootIO.TTree-Tuple{CxxWrap.CxxWrapCore.CxxPtr{ROOT.TFile}, String, String, Any}","page":"Types & Methods","title":"RootIO.TTree","text":"TTree(file::CxxWrap.CxxWrapCore.CxxPtr{ROOT.TFile}, name::String, title::String, data)\n\nCreates a new ROOT TTree with branches of given type or branches having types infered from the given data (data is not written to the tree).\n\nArguments\n\nfile: A pointer to a ROOT file where the TTree will be stored.\nname: The name of the TTree.\ntitle: The title of the TTree.\ndata: The data used to define and optionally fill the branches of the TTree. This can be a DataType or an instance of a type with fields.\n\nExample\n\njulia mutable struct Event     x::Float32     y::Float32     z::Float32     v::StdVector{Float32} end f = ROOT.TFile!Open(\"data.root\", \"RECREATE\") Event()  = Event(0., 0., 0., StdVector{Float32}()) tree = RootIO.TTree(f, \"mytree\", \"mytreetitle\", Event) e = Event() for i in 1:10     e.x, e.y, e.z = rand(3)     resize!.([e.v], 5)     e.v .= rand(Float32, 5)     RootIO.Fill(tree, e) end`\n\n\n\n\n\n","category":"method"},{"location":"typesandmethods/#RootIO.TTree-Tuple{CxxWrap.CxxWrapCore.CxxPtr{ROOT.TFile}, String, String}","page":"Types & Methods","title":"RootIO.TTree","text":"TTree(file:CxxWrap.CxxWrapCore.CxxPtr{ROOT.TFile}, name::String, title::String; kwargs...)\n\nCreates a new ROOT TTree and fills it with the provided data.\n\nArguments\n\nfile: A pointer to a ROOT file where the TTree will be stored.\nname: The name of the TTree.\ntitle: The title of the TTree.\nkwargs...: Named arguments representing the branches of the TTree. Each named argument is either a data type or an array of data.\n\nExample\n\nfile = ROOT.TFile!Open(\"example.root\", \"RECREATE\")\nname = \"example_tree\"\ntitle = \"Example TTree\"\ndata = (col_float=rand(Float64, 3), col_int=rand(Int32, 3))\ntree = RootIO.TTree(file, name, title; data...)\n\n\n\n\n\n","category":"method"},{"location":"typesandmethods/#RootIO.Fill-Tuple{RootIO.TTree, Any}","page":"Types & Methods","title":"RootIO.Fill","text":"Fill(tree::TTree, data)\n\nFills a ROOT TTree with the provided data.\n\nArguments\n\ntree: The TTree object to be filled.\ndata: The data to fill the TTree with. This can be a table or a row.\n\nExample\n\n```julia\n\nAssuming tree is an existing TTree and data is a table or row\n\nFill(tree, data)\n\n\n\n\n\n","category":"method"},{"location":"typesandmethods/#RootIO.Write-Tuple{RootIO.TTree}","page":"Types & Methods","title":"RootIO.Write","text":"Write(tree::TTree)\n\nWrites a ROOT TTree to the associated ROOT file.\n\nArguments\n\ntree::TTree: The TTree object to be written to the ROOT file.\n\n\n\n\n\n","category":"method"}]
}
