const router = require("express").Router();
import { resolveSoa } from "dns";
import { auth, firebase } from "../../firebase";
const recipeRef = firebase.firestore().collection("family");
const oldrecipeRef = firebase.firestore().collection("groceries");
const familiesRef = firebase.firestore().collection("families");
router.post("/register", (req: any, res: any) => {
  auth
    .createUserWithEmailAndPassword(req.body.email, req.body.password)
    .then(async (userCredentials) => {
      const user = userCredentials.user;
      await res.send(user);
      console.log("Registered with: ", user.email);
    })
    .catch((error) => console.log(error));
});

router.post("/login", (req: any, res: any) => {
  auth
    .signInWithEmailAndPassword(req.body.email, req.body.password)
    .then(async (userCredentials) => {
      const user = userCredentials.user;
      await res.send(user);
    })
    .catch((error) => console.log(error));
});

router.post("/logout", (req: any, res: any) => {
  auth.signOut().then(() => {
    res.send("logged out");
  });
});

router.get("/getUser", (req: any, res: any) => {
  res.send(auth.currentUser);
});

router.get("/getFamily", (req: any, res: any) => {
  console.log("ddddddddddddddd", req.body); // TODO: This return nothing
  //   const userid = req.body.uid;
  //   let famName = "";
  //   await familiesRef
  //     .get()
  //     .then((res) => {
  //       res.forEach((doc) => {
  //         const { userIds } = doc.data();
  //         userIds.map((id) => {
  //           if (id === userid) {
  //             famName = doc.data().name;
  //           }
  //         });
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("Error getting document:", error);
  //       return;
  //     });
  //   return famName;
});
module.exports = router;
