## **shadcn/ui**

So, ResumeBuilder application first we add the shadcn/ui.

---

## **React Routing**

In routing we usually router like createroute and then provide route but in this project **i learn how to pass the children of the main component and we access the children only from the parent node.**

---

Also i learn how to use the cleark authentication for thiswe are using a diffrent component file called auth and inside it we have the sign-in the we do as we mention in the document of te cleark.

---

## **Strapi CMS**

strapi cms is used for backend where we store our data nad fetch our data. It help us to create a api.And we connect this strapi cms with the mySQL database.

- npm run dvelop(If you wan't to run the strapi application)
- Create a state which have initial value false.
- Create a state which contain resumeTitle.
- Using onclick to setopenDialog(true).
- Then dialog have a prop called open = true or false, so we provide the openDialog(initially false) to it.
- But when we click the olusSqure the it become true and render the dialog box.

- After that we create cancel and create button inside the dialog also provide the onclick.
- The second state have the resumeTitle which have value when we write the value inside the input.
- Input contain onChange which contain the e.target.value and update the resumeTitle and we use this value each time when it changes.

# Tools Used

![Screenshot 2023-04-05 111833](https://user-images.githubusercontent.com/100932107/230000972-0dbf94a5-4064-4180-9638-dd4835cc70ad.png)

## Learning

- resumeInfo?.firstName will return undefined if resumeInfo is null or undefined, rather than throwing an error.(2:00:00)
