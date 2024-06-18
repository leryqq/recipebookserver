const express = require('express');
const { ObjectId, Double, Int32 } = require('mongodb');
const { connectToDb, getDb } = require('./db');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer  = require('multer');

const PORT = 3000;

const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/video', express.static(path.join(__dirname, 'video')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

let db;

connectToDb((err) => {
    if (!err){
        app.listen(PORT, (err) => {
            err ? console.log(err) : console.log(`Listening on port ${PORT}`);
        });
        db = getDb();
    }
    else{
        console.log(`DB connection error: ${err}`)
    }
})

const handleError = (res, error) => {
    res.status(500).json({ error });
}

//------------------Основные категории------------------//
app.get('/categories', (req, res) => {
    const categories = []

    db
    .collection('categories')
    .find()
    .forEach((category) => categories.push(category))
    .then(() => {
        res
        .status(200)
        .json(categories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

app.get('/categories/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){

    db
    .collection('categories')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => handleError(res, "Something wents wrong")
    )
    }
    else{
        handleError(res, "Wrong ID");
    }
})

//------------------Подкатегория ПЕРВЫЕ БЛЮДА------------------//
app.get('/first_dishes_subcategory', (req, res) => {
    const first_dishes_subcategories = []

    db
    .collection('first_dishes_subcategory')
    .find()
    .forEach((first_dishes_subcategory) => first_dishes_subcategories.push(first_dishes_subcategory))
    .then(() => {
        res
        .status(200)
        .json(first_dishes_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

app.get('/first_dishes_subcategory/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){

    db
    .collection('first_dishes_subcategory')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => handleError(res, "Something wents wrong")
    )
    }
    else{
        handleError(res, "Wrong ID");
    }
})

//------------------Подкатегория ВТОРЫЕ БЛЮДА------------------//
app.get('/second_dishes_subcategory', (req, res) => {
    const second_dishes_subcategories = []

    db
    .collection('second_dishes_subcategory')
    .find()
    .forEach((second_dishes_subcategory) => second_dishes_subcategories.push(second_dishes_subcategory))
    .then(() => {
        res
        .status(200)
        .json(second_dishes_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

app.get('/second_dishes_subcategory/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){

    db
    .collection('second_dishes_subcategory')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => handleError(res, "Something wents wrong")
    )
    }
    else{
        handleError(res, "Wrong ID");
    }
})

//------------------Подкатегория ДЕСЕРТЫ------------------//
app.get('/desserts_subcategory', (req, res) => {
    const desserts_subcategories = []

    db
    .collection('desserts_subcategory')
    .find()
    .forEach((desserts_subcategory) => desserts_subcategories.push(desserts_subcategory))
    .then(() => {
        res
        .status(200)
        .json(desserts_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

app.get('/desserts_subcategory/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){

    db
    .collection('desserts_subcategory')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => handleError(res, "Something wents wrong")
    )
    }
    else{
        handleError(res, "Wrong ID");
    }
})

//------------------Подкатегория ЗАКУСКИ------------------//
app.get('/snacks_subcategory', (req, res) => {
    const snacks_subcategories = []

    db
    .collection('snacks_subcategory')
    .find()
    .forEach((snacks_subcategory) => snacks_subcategories.push(snacks_subcategory))
    .then(() => {
        res
        .status(200)
        .json(snacks_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------ЗАВТРАКИ------------------//
app.get('/breakfast', (req, res) => {
    const breakfast_subcategories = []

    db
    .collection('category_breakfast')
    .find()
    .forEach((breakfast_subcategory) => breakfast_subcategories.push(breakfast_subcategory))
    .then(() => {
        res
        .status(200)
        .json(breakfast_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------ОБЕДЫ------------------//
app.get('/lunch', (req, res) => {
    const lunch_subcategories = []

    db
    .collection('category_lunch')
    .find()
    .forEach((lunch_subcategory) => lunch_subcategories.push(lunch_subcategory))
    .then(() => {
        res
        .status(200)
        .json(lunch_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------УЖИНЫ------------------//
app.get('/dinner', (req, res) => {
    const dinner_subcategories = []

    db
    .collection('category_dinner')
    .find()
    .forEach((dinner_subcategory) => dinner_subcategories.push(dinner_subcategory))
    .then(() => {
        res
        .status(200)
        .json(dinner_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------СЕЗОННЫЕ------------------//
app.get('/season', (req, res) => {
    const season_subcategories = []

    db
    .collection('category_season')
    .find()
    .forEach((season_subcategory) => season_subcategories.push(season_subcategory))
    .then(() => {
        res
        .status(200)
        .json(season_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------AI------------------//
app.get('/ai', (req, res) => {
    const ai_subcategories = []

    db
    .collection('category_ai')
    .find()
    .forEach((ai_subcategory) => ai_subcategories.push(ai_subcategory))
    .then(() => {
        res
        .status(200)
        .json(ai_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------NATIONAL RUSSIA------------------//
app.get('/national_russia', (req, res) => {
    const russia_subcategories = []

    db
    .collection('category_national_russia')
    .find()
    .forEach((russia_subcategory) => russia_subcategories.push(russia_subcategory))
    .then(() => {
        res
        .status(200)
        .json(russia_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------NATIONAL FRANCE------------------//
app.get('/national_france', (req, res) => {
    const france_subcategories = []

    db
    .collection('category_national_france')
    .find()
    .forEach((france_subcategory) => france_subcategories.push(france_subcategory))
    .then(() => {
        res
        .status(200)
        .json(france_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------NATIONAL ITALY------------------//
app.get('/national_italy', (req, res) => {
    const italy_subcategories = []

    db
    .collection('category_national_italy')
    .find()
    .forEach((italy_subcategory) => italy_subcategories.push(italy_subcategory))
    .then(() => {
        res
        .status(200)
        .json(italy_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------NATIONAL JAPAN------------------//
app.get('/national_japan', (req, res) => {
    const japan_subcategories = []

    db
    .collection('category_national_japan')
    .find()
    .forEach((japan_subcategory) => japan_subcategories.push(japan_subcategory))
    .then(() => {
        res
        .status(200)
        .json(japan_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------NATIONAL GERMANY------------------//
app.get('/national_germany', (req, res) => {
    const germany_subcategories = []

    db
    .collection('category_national_germany')
    .find()
    .forEach((germany_subcategory) => germany_subcategories.push(germany_subcategory))
    .then(() => {
        res
        .status(200)
        .json(germany_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

//------------------NATIONAL CHINA------------------//
app.get('/national_china', (req, res) => {
    const china_subcategories = []

    db
    .collection('category_national_china')
    .find()
    .forEach((china_subcategory) => china_subcategories.push(china_subcategory))
    .then(() => {
        res
        .status(200)
        .json(china_subcategories);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

app.get('/snacks_subcategory/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){

    db
    .collection('snacks_subcategory')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => handleError(res, "Something wents wrong")
    )
    }
    else{
        handleError(res, "Wrong ID");
    }
})

//------------------Рецепты------------------//
app.get('/recipe', (req, res) => {
    const recipes = []

    db
    .collection('recipe')
    .find()
    .forEach((recipe) => recipes.push(recipe))
    .then(() => {
        res
        .status(200)
        .json(recipes);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )
})

app.get('/recipe/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)){

    db
    .collection('recipe')
    .findOne({ _id: new ObjectId(req.params.id) })
    .then((doc) => {
        res
        .status(200)
        .json(doc);
    })
    .catch(() => handleError(res, "Something wents wrong")
    )
    }
    else{
        handleError(res, "Wrong ID");
    }
})

//----------------------random----------------------//

app.get('/random_recipe', async (req, res) => {
    
    try {
        const randomRecipeCursor = db.collection('recipe').aggregate([{ $sample: { size: 1 } }]);
        const randomRecipe = await randomRecipeCursor.toArray();
    
        res.status(200).json(randomRecipe);
    } catch (err) {
        handleError(res, "Something wents wrong")
    }
    

    
})

//------------------Рекомендации------------------//
app.get('/recommends', async (req, res) => {
    /*const recommends = []

    db
    .collection('recommendations')
    .find()
    .forEach((recommend) => recommends.push(recommend))
    .then(() => {
        res
        .status(200)
        .json(recommends);
    })
    .catch(() => handleError(res, "Something wents wrong")    
    )*/
    try {
        const randomRecipeCursor = db.collection('recipe').aggregate([{ $sample: { size: 10 } }]);
        const randomRecipe = await randomRecipeCursor.toArray();
    
        res.status(200).json(randomRecipe);
    } catch (err) {
        handleError(res, "Something wents wrong")
    }
})

//------------------Поиск------------------//
app.get('/search', async (req, res) => {
    const searchQuery = req.query.query;

    try {
        db
        .collection('recipe')
        .createIndex({ name: "text", ingredients: "text" });

        const search_result = await db.collection('recipe').find({ $text: { $search: searchQuery }} , { score: { $meta: 'textScore' }})
        .sort({score: {$meta: "textScore"}});

        const recipeArray = await search_result.toArray();
        res.status(200).json(recipeArray);
    } catch (err) {
        console.error('Ошибка при выполнении поиска:', err);
        handleError(res, "Something wents wrong")
    }
})

//------------------Авторизация------------------//
mongoose.connect('mongodb://localhost:27017/recipebook', { useNewUrlParser: true, useUnifiedTopology: true });
const database = mongoose.connection;
database.on('error', console.error.bind(console, 'MongoDB connection error:'));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    favorite: Array,
    ratedRecipes: Array},
    {collection:'users',
    versionKey: false
});
  
const User = mongoose.model('users', userSchema);
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

  // Поиск пользователя в базе данных
  const user = await User.findOne({ email, password });

  if (user) {
    // Если пользователь найден, отправить успешный ответ
    res.status(200).json(user); //{ message: 'Login successful' }
  } else {
    // Если пользователь не найден, отправить ошибку
    res.status(401).json({ message: 'Неверный логин или пароль' });
}
});

//------------------Регистрация------------------//
app.post('/api/registration', async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        res.status(401).json({ message: 'Invalid email' });
    } else {
        try {
            const newRecord = new User(req.body);
            await newRecord.save();
            res.status(200).json(newRecord);
        } catch (err) {
            console.error(err);
            handleError(res, "Server Error")
        }
    }
    
});

//------------------Избранные------------------//
app.put('/user/:id', async (req, res) => {
    try {
        const updatedData = req.body;
        const updatedRecord = await User.findByIdAndUpdate(req.params.id, updatedData, { new: true });

        if (!updatedRecord) {
            return res.status(404).send('Запись не найдена');
        }
        res.status(200).json(updatedRecord);
    } catch (err) {
        console.error('Ошибка при выполнении поиска:', err);
        handleError(res, "Something wents wrong")
    }
});

const recipeSchema = new mongoose.Schema({
    name: String,
    description: String,
    ingredients: Array,
    rate: Number,
    difficult: Number,
    cooking_time: String,
    image: String,
    steps_desc: Array,
    steps_img: Array,
    rateCount: Number,
    rateSum: Number},
    {collection:'recipe',
    versionKey: false
});
  
const Recipe = mongoose.model('recipe', recipeSchema);

//------------------Рейтинг рецепта------------------//
app.put('/recipe/:id', async (req, res) => {
    try {
        const updatedData = req.body;
        const updatedRecord = await Recipe.findOne({_id: req.params.id});
        const rateCount = updatedRecord.rateCount + 1
        const rateSum = updatedRecord.rateSum + updatedData.rate
        const arithmeticAvg = rateSum / rateCount
        
        const newRate = await Recipe.findByIdAndUpdate(req.params.id, {rate: arithmeticAvg, rateCount: rateCount, rateSum: rateSum}, { new: false });

        if (!updatedRecord) {
            //console.log(updatedData)
            return res.status(404).send('Запись не найдена');
        }
        res.status(200).json(updatedRecord);
    } catch (err) {
        console.error('Ошибка при выполнении поиска:', err);
        handleError(res, "Something wents wrong")
    }
});
//добавление id рецепта в список оцененных пользователем рецептов
app.get('/favorite/:id', async (req, res) => {
    if (ObjectId.isValid(req.params.id)){
        //const { _id } = req.body;
        try {
            const user = await User.findOne({ _id: new ObjectId(req.params.id) });
            const userFavorites = user.favorite
            let userFavoritesList = []
            for (let item of userFavorites) {
                const searchFavorite = await db.collection('recipe').findOne({ _id: ObjectId.createFromHexString(item)})
                userFavoritesList.push(searchFavorite);
            }
            res.status(200).json(userFavoritesList);
            
        } catch (err) {
            console.error('Ошибка при выполнении поиска:', err);
            handleError(res, "Something wents wrong")
        }
    }
    else{
        handleError(res, "Wrong ID");
    }
});

//------------------Рецепты пользователей------------------//
const Schema = mongoose.Schema;
const userRecipeSchema = new Schema({
    name: String,
    description: String,
    ingredients: Array,
    difficult: Number,
    cooking_time: String,
    image: String,
    steps_desc: Array,
    steps_img: Array},
    {collection:'users_recipes',
    versionKey: false
});
const userRecipe = mongoose.model('users_recipes', userRecipeSchema);

app.post('/users_recipes/', async (req, res) => {
    /*const newUserRecipe = new userRecipe({
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        difficult: req.body.difficult,
        cooking_time: req.body.cooking_time,
        image: req.body.image,
        steps_desc: req.body.steps_desc,
        steps_img: req.body.steps_img
    });*/

    const {name, description, ingredients, difficult, cooking_time, image, steps_desc, steps_img} = req.body;

    try {
        const newRecipe = new userRecipe(req.body);
        await newRecipe.save()
        res.status(200).json(newRecipe);
    }
    catch(err) {
        console.error(err);
        handleError(res, "Server Error")
    }
});

//----test*---//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'user_recipe_imgages/') // Папка, куда будут сохраняться файлы
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)); // Уникальное имя файла
    }
});
  
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    // После успешной загрузки файла можно обработать запрос здесь
    res.send('Изображение успешно загружено');
});