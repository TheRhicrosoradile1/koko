## Hi!
About this repo
i call it koko !
this is suppossed to be a testing framework 
### Key features
<ul>
<li>Node based CLI </li>
<li>Can test a whole as well as a small widget browser based apps (currently only JS support is avaliable)</li>
<li>Can detect test files automatically and run them </li>
<li>Watch mode avaliable -> re-run tests withput the need to restart app on source file changes  </li>
<li> PENDING - Support for other frameworks </li>
<li> PENDING - Support to generate graphs and reports at the end of tests </li>
</ul>

### Implementation Plan
##### Core :
1. File Collection 
2. Test Env Setup
3. Test file execution
4. Report results
##### Perf boost pending :
1. Multi-threaded execution of each test
2. Avoiding a list of directories inside the target directories like 'node_modules' directory (similar to .gitignore file )
