/**
 *  TypoScript Fixture 04
 *
 *  This fixture serves for testing the parsing of content object arrays / cobjects with array capabilities
 *
 */
namespace: default = F3_TYPO3_TypoScript
 
myArrayObject = ContentArray

myArrayObject.10 = Text
myArrayObject.10.value = "Hello "

myArrayObject.20 = Text
myArrayObject.20.value = "world!"

myArrayObject.30 = ContentArray
myArrayObject.30.20 = ContentArray
myArrayObject.30.20.10 = Text
myArrayObject.30.20.10.value = "Huh?"

anotherObject.sub1.sub2.sub3 = ContentArray
anotherObject.sub1.sub2.sub3.1 = Text
anotherObject.sub1.sub2.sub3.1.value = "Yawn"
