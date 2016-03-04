package com.nuanxindoctorapp;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import java.util.Arrays;
import java.util.List;

import com.yoloci.fileupload.FileUploadPackage;

import android.content.Intent; 
import com.imagepicker.ImagePickerPackage; 

public class MainActivity extends ReactActivity {
    
    private ImagePickerPackage mImagePicker;
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "NuanXinDoctorApp";
    }

    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

   /**
   * A list of packages used by the app. If the app uses additional views
   * or modules besides the default ones, add more packages here.
   */
    @Override
    protected List<ReactPackage> getPackages() {
      mImagePicker = new ImagePickerPackage(this);

      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        mImagePicker
      );
    }

    @Override
    public void onActivityResult(final int requestCode, final int resultCode, final Intent data) {
      super.onActivityResult(requestCode, resultCode, data);
      mImagePicker.handleActivityResult(requestCode, resultCode, data);
    }

    /*@Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      mReactRootView = new ReactRootView(this);

      mReactInstanceManager = ReactInstanceManager.builder()
        .setApplication(getApplication())
        .setBundleAssetName("index.android.bundle")
        .setJSMainModuleName("index.android")
        .addPackage(new MainReactPackage())
        .addPackage(new FileUploadPackage())
        .setUseDeveloperSupport(BuildConfig.DEBUG)
        .setInitialLifecycleState(LifecycleState.RESUMED)
        .build();
      mReactRootView.startReactApplication(mReactInstanceManager, "MyApp", null);
      setContentView(mReactRootView);
    }*/
}
