# One of the easiest way to do that is to :

1) Copy remote project and call it "sharedComponent" x
2) in sharedComponent/package.json rename the app to "cra_sharedcomponent" x
3) in sharedComponent/rsbuild.config.ts switch the app's port to 3010 (or any none used port) x
4) in cra/package.json, add the new folder under workspace x