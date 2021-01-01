var documenterSearchIndex = {"docs":
[{"location":"cobweb/#Interactive-Cobweb-Diagram-1","page":"Cobweb Diagram","title":"Interactive Cobweb Diagram","text":"","category":"section"},{"location":"cobweb/#","page":"Cobweb Diagram","title":"Cobweb Diagram","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/cobweb.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"cobweb/#","page":"Cobweb Diagram","title":"Cobweb Diagram","text":"interactive_cobweb","category":"page"},{"location":"cobweb/#InteractiveChaos.interactive_cobweb","page":"Cobweb Diagram","title":"InteractiveChaos.interactive_cobweb","text":"interactive_cobweb(ds::DiscreteDynamicalSystem, prange, O::Int = 3; kwargs...)\n\nLaunch an interactive application for exploring cobweb diagrams of 1D discrete dynamical systems. Two slides control the length of the plotted trajectory and the current parameter value. The parameter values are obtained from the given prange.\n\nIn the cobweb plot, higher order iterates of the dynamic rule f are plotted as well, starting from order 1 all the way to the given order O. Both the trajectory in the cobweb, as well as any iterate f can be turned off by using some of the buttons.\n\nKeywords\n\nTtr = 0: transient amount of time to evolve before plotting\nfkwargs = [(linewidth = 4.0, color = randomcolor()) for i in 1:O]: plotting keywords for each of the plotted iterates of f\ntrajcolor = randomcolor(): color of the trajectory\npname = \"p\": name of the parameter slider\npindex = 1: parameter index\nxmin = 0, xmax = 1: limits the state of the dynamical system can take\nTmax = 1000: maximum trajectory length\n\n\n\n\n\n","category":"function"},{"location":"cobweb/#","page":"Cobweb Diagram","title":"Cobweb Diagram","text":"The animation at the top of this page was done with","category":"page"},{"location":"cobweb/#","page":"Cobweb Diagram","title":"Cobweb Diagram","text":"using InteractiveChaos, GLMakie, DynamicalSystems\n\n# the second range is a convenience for intermittency example of logistic\nrrange = 1:0.001:4.0\n# rrange = (rc = 1 + sqrt(8); [rc, rc - 1e-5, rc - 1e-3])\n\nlo = Systems.logistic(0.4; r=rrange[1])\n\ninteractive_cobweb(lo, rrange, 5)","category":"page"},{"location":"od/#Interactive-Orbit-Diagram-1","page":"Orbit Diagram","title":"Interactive Orbit Diagram","text":"","category":"section"},{"location":"od/#","page":"Orbit Diagram","title":"Orbit Diagram","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/odhenon.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"od/#","page":"Orbit Diagram","title":"Orbit Diagram","text":"interactive_orbitdiagram\nscaleod","category":"page"},{"location":"od/#InteractiveChaos.interactive_orbitdiagram","page":"Orbit Diagram","title":"InteractiveChaos.interactive_orbitdiagram","text":"interactive_orbitdiagram(ds::DiscreteDynamicalSystem, p_index, pmin, pmax, i0 = 1;\n                         u0 = get_state(ds), parname = \"p\", title = \"\")\n\nOpen an interactive application for exploring orbit diagrams (ODs) of discrete dynamical systems. Requires DynamicalSystems.\n\nKeywords control the name of the parameter, the initial state (used for any parameter) or whether to add a title above the orbit diagram.\n\nInteraction\n\nThe application is separated in the \"OD plot\" (left) and the \"control panel\" (right). On the OD plot you can interactively click and drag with the left mouse button to select a region in the OD. This region is then re-computed at a higher resolution.\n\nThe options at the control panel are straight-forward, with\n\nn amount of steps recorded for the orbit diagram (not all are in the zoomed region!)\nt transient steps before starting to record steps\nd density of x-axis (the parameter axis)\nα alpha value for the plotted points.\n\nNotice that at each update n*t*d steps are taken. You have to press update after changing these parameters. Press reset to bring the OD in the original state (and variable). Pressing back will go back through the history of your exploration History is stored when the \"update\" button is pressed or a region is zoomed in.\n\nYou can even decide which variable to get the OD for by choosing one of the variables from the wheel! Because the y-axis limits can't be known when changing variable, they reset to the size of the selected variable.\n\nAccessing the data\n\nWhat is plotted on the application window is a true orbit diagram, not a plotting shorthand. This means that all data are obtainable and usable directly. Internally we always scale the orbit diagram to [0,1]² (to allow Float64 precision even though plotting is Float32-based). This however means that it is necessary to transform the data in real scale. This is done through the function scaleod which accepts the 5 arguments returned from the current function:\n\noddata = interactive_orbitdiagram(...)\nps, us = scaleod(oddata)\n\n\n\n\n\n","category":"function"},{"location":"od/#InteractiveChaos.scaleod","page":"Orbit Diagram","title":"InteractiveChaos.scaleod","text":"scaleod(oddata) -> ps, us\n\nGiven the return values of interactive_orbitdiagram, produce orbit diagram data scaled correctly in data units. Return the data as a vector of parameter values and a vector of corresponding variable values.\n\n\n\n\n\n","category":"function"},{"location":"od/#","page":"Orbit Diagram","title":"Orbit Diagram","text":"For example, running","category":"page"},{"location":"od/#","page":"Orbit Diagram","title":"Orbit Diagram","text":"i = p_index = 1\nds, p_min, p_max, parname = Systems.standardmap(), 0.0, 1.2, \"k\"\nt = \"orbit diagram for the standard map\"\n\noddata = interactive_orbitdiagram(ds, p_index, p_min, p_max, i;\n                                  parname = parname, title = t)\n\nps, us = scaleod(oddata)","category":"page"},{"location":"od/#","page":"Orbit Diagram","title":"Orbit Diagram","text":"will produce","category":"page"},{"location":"od/#","page":"Orbit Diagram","title":"Orbit Diagram","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/odstandard.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"agents/#Agent-based-models-1","page":"Agent Based Models","title":"Agent based models","text":"","category":"section"},{"location":"agents/#","page":"Agent Based Models","title":"Agent Based Models","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/agents.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"agents/#","page":"Agent Based Models","title":"Agent Based Models","text":"interactive_abm","category":"page"},{"location":"agents/#InteractiveChaos.interactive_abm","page":"Agent Based Models","title":"InteractiveChaos.interactive_abm","text":"interactive_abm(model::ABM, agent_step!, model_step!, params=Dict(); kwargs...)\n\nOpen an interactive application for exploring an Agent-Based-Model. Requires Agents. Currently only works for 2D GridSpace or ContinuousSpace.\n\nThe application evolves an ABM interactively and plots its evolution, while allowing changing any of the model parameters interactively and also showing the evolution of collected data over time (if any are asked for, see below).\n\nmodel, agent_step!, model_step! are the same arguments that step! or run! from Agents accept.\n\nCalling interactive_abm returns: scene, agent_df, model_df. So you can save the scene, but you can also access the collected data (if any).\n\nInteraction\n\nButtons and sliders on the right-hand-side allow running/pausing the application. The slider sleep controls how much sleep time should occur after each plot update. The slider spu is the steps-per-update, i.e. how many times to step the model before updating the plot.\n\nThe final argument params is a dictionary and decides which parameters of the model will be configurable from the interactive application. Each entry of params is a pair of Symbol to an AbstractVector, and provides a range of possible values for the parameter named after the given symbol. Changing a value in the parameter slides is only updated into the actual model when pressing the \"update\" button.\n\nThe \"reset\" button resets the model to its original agent and space state but it updates it to the currently selected parameter values. A red vertical line is displayed in the data plots when resetting, for visual guidance.\n\nKeywords\n\nac, as, am: either constants, or functions each accepting an agent and outputting a valid value for the agent color, shape, or size.\nscheduler = model.scheduler: decides the plotting order of agents (which matters only if there is overlap).\noffset = nothing: Can be a function accepting an agent and returning an offset position that adjusts the agent's position when plotted (which matters only if there is overlap).\nadata, mdata: Same as the keyword arguments of Agents.run!, and decide which data of the model/agents will be collected and plotted below the interactive plot. Notice that data collection can only occur on plotted steps (and thus steps not plotted due to spu are also not data-collected).\nalabels, mlabels: If data are collected from agents or the model with adata, mdata, the corresponding plots have a y-label named after the collected data. Instead, you can give alabels, mlabels (vectors of strings with exactly same length as adata, mdata), and these labels will be used instead.\nwhen = true: When to perform data collection, as in Agents.run!.\nequalaspect = true: Set the ABM scatterplot's aspect ratio to equal.\nspu = 1:100: Values that the \"spu\" slider will obtain.\n\n\n\n\n\n","category":"function"},{"location":"agents/#","page":"Agent Based Models","title":"Agent Based Models","text":"The animation at the start of this page was done with:","category":"page"},{"location":"agents/#","page":"Agent Based Models","title":"Agent Based Models","text":"using Agents, Random\nusing GLMakie\nusing InteractiveChaos\n\ncd(@__DIR__)\n\nmodel, agent_step!, model_step! = Models.forest_fire()\n\nalive(model) = count(a.status for a in allagents(model))\nburning(model) = count(!a.status for a in allagents(model))\nmdata = [alive, burning, nagents]\nmlabels = [\"alive\", \"burning\", \"total\"]\n\nparams = Dict(\n    :f => 0.02:0.01:1.0,\n    :p => 0.01:0.01:1.0,\n)\n\nac(a) = a.status ? \"#1f851a\" : \"#67091b\"\nam = :rect\n\np1 = interactive_abm(model, agent_step!, model_step!, params;\nac = ac, as = 1, am = am, mdata = mdata, mlabels=mlabels)","category":"page"},{"location":"highlight/#Trajectory-Highlighter-1","page":"Trajectory Highlighter","title":"Trajectory Highlighter","text":"","category":"section"},{"location":"highlight/#","page":"Trajectory Highlighter","title":"Trajectory Highlighter","text":"trajectory_highlighter","category":"page"},{"location":"highlight/#","page":"Trajectory Highlighter","title":"Trajectory Highlighter","text":"2D Version:","category":"page"},{"location":"highlight/#","page":"Trajectory Highlighter","title":"Trajectory Highlighter","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/highlighter2D.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"highlight/#","page":"Trajectory Highlighter","title":"Trajectory Highlighter","text":"3D Version:","category":"page"},{"location":"highlight/#","page":"Trajectory Highlighter","title":"Trajectory Highlighter","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/highlighter3D.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"brainscan/#Interactive-Cobweb-Diagram-1","page":"Brainscanning PSOS","title":"Interactive Cobweb Diagram","text":"","category":"section"},{"location":"brainscan/#","page":"Brainscanning PSOS","title":"Brainscanning PSOS","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/psos_brainscan.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"brainscan/#","page":"Brainscanning PSOS","title":"Brainscanning PSOS","text":"brainscan_poincaresos","category":"page"},{"location":"brainscan/#InteractiveChaos.brainscan_poincaresos","page":"Brainscanning PSOS","title":"InteractiveChaos.brainscan_poincaresos","text":"brainscan_poincaresos(A::Dataset, j::Int)\n\nLaunch an interactive application for scanning a Poincare surface of section of A like a \"brain scan\", where the plane that defines the section can be arbitrarily moved around via a slider. Return scene, ax3D, ax2D.\n\nThe input dataset must be 3 dimensional, and here the crossing plane is always chosen to be when the j-th variable of the dataset crosses a predefined value. The slider automatically gets all possible values the j-th variable can obtain.\n\nThe keywords linekw, scatterkw are named tuples or dictionaries that are propagated to as keyword arguments to the line and scatter plot respectively, while the keyword direction = -1 is propagated to the function DyamicalSystems.poincaresos.\n\n\n\n\n\n","category":"function"},{"location":"brainscan/#","page":"Brainscanning PSOS","title":"Brainscanning PSOS","text":"The animation at the top of this page was done with","category":"page"},{"location":"brainscan/#","page":"Brainscanning PSOS","title":"Brainscanning PSOS","text":"using GLMakie, DynamicalSystems, InteractiveChaos\nusing OrdinaryDiffEq\n\nds = Systems.henonheiles()\ndiffeq = (alg = Vern9(),)\nu0s = [\n    [0.0, -0.25, 0.42081, 0.0],\n    [0.0, 0.1, 0.5, 0.0],\n    [0.0, -0.31596, 0.354461, 0.0591255]\n]\ntrs = [trajectory(ds, 10000, u0; diffeq...)[:, SVector(1,2,3)] for u0 ∈ u0s]\nfor i in 2:length(u0s)\n    append!(trs[1], trs[i])\nend\n\n# Inputs:\nj = 2 # the dimension of the plane\ntr = trs[1]\n\nbrainscan_poincaresos(tr, j)","category":"page"},{"location":"billiards/#Billiards-1","page":"Billiards","title":"Billiards","text":"","category":"section"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/bill2.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"(see the examples/billiard.jl file to generate every animation)","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"interactive_billiard","category":"page"},{"location":"billiards/#InteractiveChaos.interactive_billiard","page":"Billiards","title":"InteractiveChaos.interactive_billiard","text":"interactive_billiard(bd::Billiard [, x, y, φ] [, ω=nothing]; kwargs...)\ninteractive_billiard(bd::Billiard, ps::Vector{<:AbstractParticle}; kwargs...)\n\nLaunch an interactive application that evolves particles in a dynamical billiard bd, using DynamicalBilliards.jl. Requires DynamicalBilliards.\n\nYou can either specify exactly the particles that will be used ps or provide some initial conditions x,y,φ,ω, which by default are random in the billiard. The particles are evolved in real time instead of being pre-calculated, so the application can be left to run for infinite time.\n\nSee also interactive_billiard_bmap and billiard_video.\n\nInteraction\n\nPush \"play\" to start evolving particles in the billiard, and \"reset\" to restore them to their (latest) initial condition. The \"particles\" hides or shows the particles. The \"speed\" slider controls the animation speed (in fact, it controls how often are the plots updated).\n\nClicking and dragging inside the billiard plot shows a line. When the line is selected, new particles are created that have the direction of this line, as well as its starting position, using the function particlebeam from DynamicalBilliards.\n\nFurther keywords\n\nN = 100 : if exact particles are not given, N are created. Otherwise it is length(ps).\ndx = 0.01 : width of the particle beam.\ndt = 0.001 : time resolution of the animation.\ntail = 1000 : length of the tail of the particles (multiplies dt).\ncolors = JULIADYNAMICS_COLORS : If a symbol (colormap name) each particle gets a color from the map. If Vector of length N, each particle gets a color form the vector. If Vector with length < N, linear interpolation across contained colors is done.\nfade = true : Whether to add fadeout to the particle tail.\nsleept = nothing : If the slowest speed of the animation is already too fast, give a small number to sleept.\nplot_particles = true : If false, the particles are not plotted (as balls and arrows). This makes the application faster (you cannot show them again with the button).\n\n\n\n\n\n","category":"function"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"For example, running","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"using DynamicalBilliards, InteractiveChaos, GLMakie\nbd, = billiard_logo(T = Float32)\ninteractive_billiard(bd, 1f0, tail = 1000)","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"gives","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/bill1.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"billiard_video","category":"page"},{"location":"billiards/#InteractiveChaos.billiard_video","page":"Billiards","title":"InteractiveChaos.billiard_video","text":"billiard(file, bd::Billiard [, x, y, φ] [, ω=nothing]; kwargs...)\nbilliard(file, bd::Billiard, ps::Vector{<:AbstractParticle}; kwargs...)\n\nPerform the same animation like in interactive_billiard, but there is no interaction; the result is saved directly as a video in file (no buttons are shown).\n\nKeywords\n\nN, dt, tail, dx, colors, plot_particles, fade: same as interactive_billiard, but with a bit \"denser\" defaults. plot_particles is false by default here.\nspeed = 5: Animation \"speed\" (how many dt steps are taken before a frame is recorded)\nframes = 1000: amount of frames to record.\nframerate = 60: exported framerate.\nbackgroundcolor = :white.\nres = nothing: resolution of the frames. If nothing, a resolution matching the the billiard aspect ratio is estimated. Otherwise pass a 2-tuple.\n\n\n\n\n\n","category":"function"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"Here is a video in the style of 3Blue1Brown","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/3b1billiard.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"interactive_billiard_bmap","category":"page"},{"location":"billiards/#InteractiveChaos.interactive_billiard_bmap","page":"Billiards","title":"InteractiveChaos.interactive_billiard_bmap","text":"interactive_billiard_bmap(bd::Billiard, ω=nothing; kwargs...)\n\nLaunch an interactive application whose left part is interactive_billiard and whose write part is an interactive boundary map of the billiard (see \"Phase spaces\" in DynamicalBilliards.jl).\n\nA particle evolved in the real billiard is also shown on the boundary map. All interaction of the billiard works as before, but there is also interaction in the boundary map: clicking on it will generate a particle whose boundary map is the clicked point.\n\nThe mean collision time \"m.c.t.\" of the particle is shown as well.\n\nKeywords\n\nnewcolor = randomcolor A function which takes as input (pos, vel, ξ, sφ) and outputs a color (for the scatter points in the boundary map).\nms = 12 markersize (in pixels).\ndt, tail, sleept, fade : propagated to interactive_billiard.\n\n\n\n\n\n","category":"function"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/bmap.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"","category":"page"},{"location":"billiards/#","page":"Billiards","title":"Billiards","text":"billiard_bmap_plot","category":"page"},{"location":"billiards/#InteractiveChaos.billiard_bmap_plot","page":"Billiards","title":"InteractiveChaos.billiard_bmap_plot","text":"billiard_bmap_plot(bd::Billiard, ps::Vector{<:AbstractParticle}; kwargs...)\n\nReturn a static scene which has particles plotted on both the real billiard as well the boundary map, each with its own color (keyword colors), and the same color is used for the corresponding scatter points in the boundary map.\n\nAll keyword arguments are the same as interactive_billiard_bmap, besides the interaction part of course.\n\n\n\n\n\n","category":"function"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: InteractiveChaos logo)","category":"page"},{"location":"#Introduction-1","page":"Introduction","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"InteractiveChaos is a package that provides applications for interactively exploring dynamical systems. It extends various packages of JuliaDynamics.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"info: Example animations\nAll of the animations/videos you will see in this documentation are generated by simply running the scripts of the examples folder of InteractiveChaos.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Here are some examples of what you can do with InteractiveChaos (see Index below, or the various pages of the side bar for full list of applications)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Dynamical systems","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"<video width=\"75%\" height=\"auto\" controls loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/odhenon.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Billiards","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"<video width=\"75%\" height=\"auto\" controls loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/bmap.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Agent based models","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"<video width=\"75%\" height=\"auto\" controls loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/agents.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"#Description-1","page":"Introduction","title":"Description","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"InteractiveChaos is a Julia package that builds on top of the packages of JuliaDynamics to create interactive applications for dynamical systems of all kinds. It is written exclusively in Julia, taking advantage of the interactive plotting that GLMakie.jl provides. InteractiveChaos is great for teaching and demonstrations, but we believe that it can also be taken advantage of in research.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The combination of the following properties make InteractiveChaos a truly unique software (to our knowledge).","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"General purpose. Arguably the most unique feature of InteractiveChaos is that every application it offers works for any dynamical system (for the class it targets). The first app shown in the introduction works for any discrete system (of any dimensions), the second app works for any 2D billiard of any shape, the third app works for any 2D agent based model (in discrete or continuous space).\nFast. Because internally some of the fastest dynamical systems software and some of the fastest plotting software are used, this makes our applications extremely fast, given the amount of computations and plotted data they handle.\nReal data. Everything that is plotted is real. For example, the first application shown plots the true orbit diagram (which means that the alpha value is actually the value of the natural density), instead of a pixelated short-hand that allows faster plotting. Since real-data are computed, they are also returned to the user. This means that if the user finds something interesting at any stage of interacting with the application, they can immediately analyze the results in a more thorough and rigorous manner.\nIn real time.  Most applications of InteractiveChaso calculate everything in real-time. This allows true real time interactivity: at any point some model parameter may change and this change will be immediately reflected into the visualizations. Another important consequence of doing calculations in real time is that all applications of InteractiveChaos can evolve dynamical systems potentially forever.\nInterfacing existing software for dynamical systems. There is no implementation for what is a \"billiard\" or a \"continuous dynamical system\" in InteractiveChaos. Instead, it interfaces software from JuliaDynamics. This means that you can re-use the system that you analyze scientifically and explore it interactively. But most importantly, it means that actually launching the applications typically requires 5-10 new lines of code (since you have may have already written code to e.g. create and analyze a DynamicalSystem with DynamicalSystems.jl, you can re-use the identically same instance of that DynamicalSystem in e.g. the orbit diagram interactive application).\nSmall source code The entire source code for e.g. the orbit diagram plot is 200 lines of code, all clear to understand (we hope), allowing one to expand the existing apps, or to make more specialized versions.","category":"page"},{"location":"#Usage-1","page":"Introduction","title":"Usage","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Using InteractiveChaos is straightforward, and the documentation strings of the exported functions describe in detail their purpose (see the individual pages of the sidebar).","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Each application relies on a package of JuliaDynamics, and thus it requires it to run. For example, if you want to use the function interactive_orbitdiagram, then you must also load DynamicalSystems besides InteractiveChaos, e.g.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"using DynamicalSystems, InteractiveChaos, GLMakie\n\nds = Systems.some_example_system()\n\ninteractive_psos(ds, ...)","category":"page"},{"location":"#Installation-1","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"To install do ]add InteractiveChaos GLMakie. GLMakie is necessary for providing a plotting backend, since InteractiveChaos does not install one by default.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"It is expected that you have the latest (stable) versions installed for the library you want to use, e.g. DynamicalSystems.","category":"page"},{"location":"#Index-1","page":"Introduction","title":"Index","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"Modules = [InteractiveChaos]\nOrder   = [:function, :type]","category":"page"},{"location":"psos/#Interactive-Poincaré-Surface-of-Section-1","page":"Poincaré Surface of Section","title":"Interactive Poincaré Surface of Section","text":"","category":"section"},{"location":"psos/#","page":"Poincaré Surface of Section","title":"Poincaré Surface of Section","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/interactive_psos.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"psos/#","page":"Poincaré Surface of Section","title":"Poincaré Surface of Section","text":"interactive_poincaresos","category":"page"},{"location":"psos/#InteractiveChaos.interactive_poincaresos","page":"Poincaré Surface of Section","title":"InteractiveChaos.interactive_poincaresos","text":"interactive_poincaresos(cds, plane, idxs, complete; kwargs...)\n\nLaunch an interactive application for exploring a Poincaré surface of section (PSOS) of the continuous dynamical system cds. Requires DynamicalSystems.\n\nThe plane can only be the Tuple type accepted by DynamicalSystems.poincaresos, i.e. (i, r) for the ith variable crossing the value r. idxs gives the two indices of the variables to be displayed, since the PSOS plot is always a 2D scatterplot. I.e. idxs = (1, 2) will plot the 1st versus 2nd variable of the PSOS. It follows that plane[1] ∉ idxs must be true.\n\ncomplete is a three-argument function that completes the new initial state during interactive use, see below.\n\nThe function returns: scene, laststate with the latter being an observable containing the latest initial state.\n\nKeyword Arguments\n\ndirection, rootkw : Same use as in DynamicalSystems.poincaresos.\ntfinal = (1000.0, 10.0^4) : A 2-element tuple for the range of values for the total integration time (chosen interactively).\ncolor : A function of the system's initial condition, that returns a color to plot the new points with. The color must be RGBf0/RGBAf0.  A random color is chosen by default.\nlabels = (\"u₁\" , \"u₂\") : Scatter plot labels.\nscatterkwargs = (): Named tuple of keywords passed to scatter.\ndiffeq... : Any extra keyword arguments are passed into init of DiffEq.\n\nInteraction\n\nThe application is a standard scatterplot, which shows the PSOS of the system, initially using the system's u0. Two sliders control the total evolution time and the size of the marker points (which is always in pixels).\n\nUpon clicking within the bounds of the scatter plot your click is transformed into a new initial condition, which is further evolved and its PSOS is computed and then plotted into the scatter plot.\n\nYour click is transformed into a full D-dimensional initial condition through the function complete. The first two arguments of the function are the positions of the click on the PSOS. The third argument is the value of the variable the PSOS is defined on. To be more exact, this is how the function is called:\n\nx, y = mouseclick; z = plane[2]\nnewstate = complete(x, y, z)\n\nThe complete function can throw an error for ill-conditioned x, y, z. This will be properly handled instead of breaking the application. This newstate is also given to the function color that gets a new color for the new points.\n\n\n\n\n\n","category":"function"},{"location":"psos/#","page":"Poincaré Surface of Section","title":"Poincaré Surface of Section","text":"","category":"page"},{"location":"psos/#","page":"Poincaré Surface of Section","title":"Poincaré Surface of Section","text":"To generate the video at the start of this page you can run","category":"page"},{"location":"psos/#","page":"Poincaré Surface of Section","title":"Poincaré Surface of Section","text":"using InteractiveChaos, GLMakie, OrdinaryDiffEq, DynamicalSystems\ndiffeq = (alg = Vern9(), abstol = 1e-9, reltol = 1e-9)\n\nhh = Systems.henonheiles()\n\npotential(x, y) = 0.5(x^2 + y^2) + (x^2*y - (y^3)/3)\nenergy(x,y,px,py) = 0.5(px^2 + py^2) + potential(x,y)\nconst E = energy(get_state(hh)...)\n\nfunction complete(y, py, x)\n    V = potential(x, y)\n    Ky = 0.5*(py^2)\n    Ky + V ≥ E && error(\"Point has more energy!\")\n    px = sqrt(2(E - V - Ky))\n    ic = [x, y, px, py]\n    return ic\nend\n\nplane = (1, 0.0) # first variable crossing 0\n\n# %% Coloring points using the Lyapunov exponent\nfunction λcolor(u)\n    λ = lyapunovs(hh, 4000; u0 = u)[1]\n    λmax = 0.1\n    return RGBf0(0, 0, clamp(λ/λmax, 0, 1))\nend\n\nstate, scene = interactive_poincaresos(hh, plane, (2, 4), complete;\nlabels = (\"q₂\" , \"p₂\"),  color = λcolor, diffeq...)","category":"page"},{"location":"trajectory/#Interactive-trajectory-evolution-1","page":"Trajectory Evolution","title":"Interactive trajectory evolution","text":"","category":"section"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/interactive_trajectory.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"interactive_evolution","category":"page"},{"location":"trajectory/#InteractiveChaos.interactive_evolution","page":"Trajectory Evolution","title":"InteractiveChaos.interactive_evolution","text":"interactive_evolution(ds::DynamicalSystem, u0s; kwargs...)\n\nLaunch an interactive application that can evolve the initial conditions u0s (vector of vectors) of the given dynamical system. All initial conditions are evolved in parallel and at exactly the same time. Two controls allow you to pause/resume the evolution and to adjust the speed. The application can run forever (trajectories are computed on demand).\n\nThe function returns scene, main, layout, obs. scene is the overarching scene (the entire GUI) and can be recorded. main is the actual plot of the trajectory, that allows adding additional plot elements or controlling labels, ticks, etc. layout is the overarching layout, that can be used to add additional plot panels. obs is a vector of observables, each containing the current state of the trajectory.\n\nKeywords\n\ntransform = identity : Transformation applied to the state of the dynamical system before plotting. Can even return a vector that is of higher dimension than ds.\nidxs = 1:min(length(transform(ds.u0)), 3) : Which variables to plot (up to three can be chosen). Variables are selected after transform has been applied.\ncolors : The color for each trajectory. Random colors are chosen by default.\nlims : A tuple of tuples (min, max) for the axis limits. If not given, they are automatically deduced by evolving each of u0s 1000 units and picking most extreme values (limits cannot be adjust after application is launched).\nm = 1.0 : The trajectory endpoints have a marker. A heuristic is done to choose appropriate marker size given the trajectory size. m is a multiplier that scales the marker size.\nplotkwargs = NamedTuple() : A named tuple of keyword arguments propagated to the plotting function (lines for continuous, scatter for discrete systems). plotkwargs can also be a vector of named tuples, in which case each initial condition gets different arguments.\ntail = 1000 : Length of plotted trajectory (in step units).\ndiffeq = DynamicalSystems.CDS_KWARGS : Named tuple of keyword arguments propagated to the solvers of DifferentialEquations.jl (for continuous systems). Because trajectories are not pre-computed and interpolated, it is recommended to use a combination of arguments that limit maximum stepsize, to ensure smooth curves. For example:\nusing OrdinaryDiffEq\ndiffeq = (alg = Tsit5(), dtmax = 0.01)\n\n\n\n\n\n","category":"function"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"","category":"page"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"To generate the video at the start of this page run","category":"page"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"using InteractiveChaos\nusing DynamicalSystems, GLMakie\nusing OrdinaryDiffEq\n\nds = Systems.henonheiles()  # 4D chaotic/regular continuous system\n\nu0s = [[0.0, -0.25, 0.42081, 0.0],\n[0.0, 0.1, 0.5, 0.0],\n[0.0, -0.31596, 0.354461, 0.0591255]]\n\ndiffeq = (alg = Vern9(), dtmax = 0.01)\nidxs = (1, 2, 4)\ncolors = [\"#233B43\", \"#499cbf\", \"#E84646\"]\n\nscene, main, obs = interactive_evolution(\n    ds, u0s; idxs, tail = 10000, diffeq, colors\n)","category":"page"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"And here is another version for a discrete system:","category":"page"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"using InteractiveChaos\nusing DynamicalSystems, GLMakie\n\nds = Systems.towel() # 3D chaotic discrete system\nu0s = [0.1ones(3) .+ 1e-3rand(3) for _ in 1:3]\n\nscene, main, layout, obs = interactive_evolution(\n    ds, u0s; idxs = SVector(1, 2, 3), tail = 100000,\n)","category":"page"},{"location":"trajectory/#","page":"Trajectory Evolution","title":"Trajectory Evolution","text":"<video width=\"100%\" height=\"auto\" controls autoplay loop>\n<source src=\"https://raw.githubusercontent.com/JuliaDynamics/JuliaDynamics/master/videos/interact/towel_trajectory.mp4?raw=true\" type=\"video/mp4\">\n</video>","category":"page"}]
}
