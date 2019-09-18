# Object-detection-using-Tensorflow

In this Repository I will explain everything you need to know to test tensorflow pre-trained ojbect detection models on three different platforms.

1. On a Web browser (using javascript)  
2. On a Cloud platform (google colaboratory notebook) 
3. On a local GPU (Nvidia) 

On a Web browser

Using tensorflow.js coco-Ssd model (https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)

Note: Tensorflow.js also uses WebGL JavaScript API allowing GPU-accelerated usage of physics and image processing and effects as part of the web page canvas.
So, If you have a GPU in your machine you can configure it to be used in browser to increase inference speed.

Enabling GPU usage by Browser(Google Chrome)

Step-1: check which gpu your browser is using by opening chrome://gpu/
If gpu0 is active then your by default gpu(intel graphics) is enabled and if gpu1 is enabled then it's already configured.

Step-2: Make gpu1 active by going in graphics settings and setting your browser as a high performance app and also doing the same from the graphics card settings.

Now you can move to the code

#Index.html
1. We are using script tags to import the model

#Index.js
1. Accessing web cam (start)
2. Loading model (load)
3. Running detection through webcam feed (detect)
4. displaying it on the canvas (move your mouse to the video element)


