# Object-detection-using-Tensorflow

In this Repository I will explain everything you need to know to test tensorflow pre-trained models using tensorflow object detection API on three different platforms.

1. In a Web browser (using javascript)  
2. On a local GPU (Nvidia with CUDA)
3. On a free Cloud based GPU platform (google colaboratory notebook)

# In Web browser

Using tensorflow.js coco-Ssd model (https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)

  Note: Tensorflow.js also uses WebGL JavaScript API allowing GPU-accelerated usage of physics,image processing and effects as part of    the web page canvas.
  So, If you have a GPU in your machine you can configure it to be used in browser to increase inference speed.

  Enabling GPU usage by Browser(Google Chrome)

    Step-1: check which gpu your browser is using by opening chrome://gpu/
    If gpu0 is active then your by default gpu(intel graphics) is enabled and if gpu1 is enabled then it's already configured.

    Step-2: Make gpu1 active by going in graphics settings and setting your browser as a high performance app and also doing the same from the graphics card settings.

  Testing the code

  -Index.html
    1. We are using script tags to import the model

  -Index.js
    1. Accessing web cam ( click on start)
    2. Loading model (click on load)
    3. displaying seperate stream on the canvas to perform detection (move your mouse to the webcam element element to start displaying)
    4. Creating boxes on detected objects (click on detect)


# On a local GPU (Nvidia GPU with CUDA support)

  Installation/Setup( we will mainly require two libraries in this implementation- Tensorflow and OpenCV)

   1. Installing Tensorflow GPU requires pre-installed GPU drivers with supported version, CUDA toolkit, cuDNN sdk.
        official guide is given on there website (https://www.tensorflow.org/install/gpu)
        But this process of installing tensorflow is very painful so, there is an alternative to it.

   2. With the help of anaconda(you don't need to worry about anything in this installation):

    Step-1 Download and install anaconda

    Step-2 Open anaconda terminal and run following commands to install tensorflow gpu
      1. $ conda create --name tf_gpu
      2. $ activate tf_gpu
      3. $ conda install -c tensorflow-gpu
      4. $ conda install -c menpo opencv
      5. $ pip install opencv-contrib-python

    Step-3 Test your installation (https://stackoverflow.com/questions/38009682/how-to-tell-if-tensorflow-is-using-gpu-acceleration
    from-inside-python-shell)

  Implementation pre-requisites 

   Using tensorflow API to run pre-trained models requires some extra configuration.
   
      Step-1. Download tensorflow models repository (required for using its utilities)
      from 
      $ Object-detection-using-Tensorflow\Tensorflow python API
      run 
      $ git clone https://github.com/tensorflow/models.git
      
      Step-2. Download cocoapi repository (required for using COCO evaluation metrics)
      from 
      $ Object-detection-using-Tensorflow\Tensorflow python API
      run
      $ git clone https://github.com/cocodataset/cocoapi.git
      
      Step-3. It also requires Protobuf compilers to configure model and training parameters so, make sure the file string_int_label_map.proto is compiled and compiled file string_int_label_map_pb2 is present in models\research\object_detection\protos you can complile proto files by running this command from models/research directory

        # From tensorflow/models/research/
        $ protoc object_detection/protos/*.proto --python_out=.

        In case your protobuf compiler doesn't work you can use the compiled protobuf file from this repository 
        by moving 
        string_int_label_map_pb2 file in models\research\object_detection\protos

      Step-4. Addition of directories to the PYTHON PATH to access utilites in the models and cocoapi directories.
      >>> sys.path.append('C:\\Users\\SML\\Desktop\\me170003058\Github\\Object-detection-using-Tensorflow\\Tensorflow pythonAPI\\models\\research\\object_detection\\data')
      >>> sys.path.append('C:\\Users\\SML\\Desktop\\me170003058\Github\\Object-detection-using-Tensorflow\\Tensorflow pythonAPI\\models\\research\\object_detection')
      >>> sys.path.append('C:\\Users\\SML\\Desktop\\me170003058\Github\\Object-detection-using-Tensorflow\\Tensorflow pythonAPI\\models\\research\\slim')
      >>> sys.path.append('C:\\Users\\SML\\Desktop\\me170003058\Github\\Object-detection-using-Tensorflow\\Tensorflow pythonAPI\\models\\research')
   
   Testing the code 
   
    Step-1 Clone the repository
    From Object-detection-using-Tensorflow\Tensorflow python API Run detect.py using python command
    $ Object-detection-using-Tensorflow\Tensorflow python API\python detect.py
    -press q to close
   
   # On a free Cloud based GPU platform (google colaboratory notebook)
   
   Coming soon.
   
   # Troubleshooting 
   
   1. You might face very slow inference speed on videos if you follow the official instructions of implementation of tensorflow object      detection API (https://github.com/tensorflow/models/tree/master/research/object_detection).
     this is because that code is creating tensorflow session each time the camera captures a frame and which makes imference very slow.
     
   Read this issue to understand it better (https://github.com/tensorflow/models/issues/3969)
   
   to further increase inference speed refer to this issue
   
   (https://github.com/tensorflow/models/issues/3270)
    

