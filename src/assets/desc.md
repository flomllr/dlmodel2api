# Facial-Expression-Recognition.Pytorch

A CNN based pytorch implementation on facial expression recognition (FER2013 and CK+), achieving 73.112% (state-of-the-art) in FER2013 and 94.64% in CK+ dataset

## Demos

![Image text](https://raw.githubusercontent.com/WuJie1010/Facial-Expression-Recognition.Pytorch/master/demo/1.png)
![Image text](https://raw.githubusercontent.com/WuJie1010/Facial-Expression-Recognition.Pytorch/master/demo/2.png)

## FER2013 Dataset

- Dataset from https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/data
  Image Properties: 48 x 48 pixels (2304 bytes)
  labels: 0=Angry, 1=Disgust, 2=Fear, 3=Happy, 4=Sad, 5=Surprise, 6=Neutral
  The training set consists of 28,709 examples. The public test set consists of 3,589 examples. The private test set consists of another 3,589 examples.

### fer2013 Accurary

- Model： VGG19 ; PublicTest_acc： 71.496% ; PrivateTest_acc：73.112% <Br/>
- Model： Resnet18 ; PublicTest_acc： 71.190% ; PrivateTest_acc：72.973%

## CK+ Dataset

- The CK+ dataset is an extension of the CK dataset. It contains 327 labeled facial videos,
  We extracted the last three frames from each sequence in the CK+ dataset, which
  contains a total of 981 facial expressions. we use 10-fold Cross validation in the experiment.

### CK+ Accurary

- Model： VGG19 ; Test_acc： 94.646% <Br/>
- Model： Resnet18 ; Test_acc： 94.040%
