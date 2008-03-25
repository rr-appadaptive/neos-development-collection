/**
 *  TypoScript Fixture 07
 *
 *  This fixture serves for testing the unset operator for
 *  objects, variables and properties.
 *
 */
namespace: default = F3_TYPO3_TypoScript
 
object1 = Text
object1.$message = "Hello world"
object1.value = $message

object1 >

object2 = Text
object2.$message = "Hello world"
object2.$message >
object2.value = $message

object3 = Text
object3 {
	$message = "Hello world"
	value = $message
}

object3.value >
