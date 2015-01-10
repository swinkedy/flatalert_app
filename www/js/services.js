angular.module('starter.services', [])

.factory('APICallsFactory', function($http) {
    return {
        getAllFarts: function() {
            var promise = $http.get('https://flatalert.herokuapp.com')
            .then(function(result) {
                alert('yes');
                return result.data;
            });
            
            return promise;
        },

        getFartomics: function() {
        }
    }
})

.factory('Farts', function() {

    // Some fake testing data
    var farts = [
        {
            "id":58,
            "fartwave":"136 158 177 190 199 202 204 204 203 201 199 196 194 191 188 185 181 179 175 172 169 166 163 161 158 155 152 149 147 144 143 140 138 135 133 131 129 127 125 124 121 ",
            "created_at":"2015-01-10T18:21:23.043Z",
            "updated_at":"2015-01-10T18:21:23.043Z"
        },
        {
            "id":59,
            "fartwave":"131 165 202 238 268 292 312 328 342 354 364 372 379 385 388 388 384 377 370 364 357 351 345 339 333 326 320 314 309 303 297 291 286 281 276 271 266 262 257 253 248 243 239 235 230 226 222 218 213 209 205 201 197 193 189 186 182 178 175 172 168 165 162 160 157 154 151 149 146 144 141 139 137 134 132 130 128 126 125 123 121 ",
            "created_at":"2015-01-10T18:22:59.138Z",
            "updated_at":"2015-01-10T18:22:59.138Z"
        },
        {
            "id":60,
            "fartwave":"125 152 181 207 230 250 267 281 294 304 314 323 330 336 338 336 333 328 323 318 313 308 303 298 294 290 285 281 277 273 269 264 260 256 251 247 243 238 234 230 226 222 218 214 211 207 203 200 196 193 189 186 183 179 176 173 170 167 165 162 159 157 154 151 149 146 144 142 140 138 135 133 131 129 128 126 124 122 120 ",
            "created_at":"2015-01-10T18:24:11.215Z",
            "updated_at":"2015-01-10T18:24:11.215Z"
        },
        {
            "id":61,
            "fartwave":"146 178 209 238 264 287 306 323 337 347 352 352 349 344 338 332 326 320 314 308 302 296 291 285 280 274 270 264 259 255 250 245 241 236 231 227 223 219 214 210 206 202 199 195 191 188 184 181 178 174 171 168 165 162 160 157 154 151 149 146 144 142 139 137 135 133 130 129 127 125 123 121 120 ",
            "created_at":"2015-01-10T18:26:11.114Z",
            "updated_at":"2015-01-10T18:26:11.114Z"
        },
        {
            "id":62,
            "fartwave":"120 121 122 122 123 123 124 125 126 126 127 128 129 129 130 130 130 130 129 129 128 128 127 126 125 124 123 122 122 121 120 ",
            "created_at":"2015-01-10T18:34:39.835Z",
            "updated_at":"2015-01-10T18:34:39.835Z"
        }];

    return {
        all: function() {
            return farts;
        }/*,
        remove: function(fart) {
            farts.splice(farts.indexOf(chat), 1);
        },
        get: function(chatId) {
            for (var i = 0; i < chats.length; i++) {
                if (chats[i].id === parseInt(chatId)) {
                    return chats[i];
                }
            }
            return null;
        }*/
    }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    // Some fake testing data
    var friends = [{
        id: 0,
        name: 'Ben Sparrow',
        notes: 'Enjoys drawing things',
        face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
    }, {
        id: 1,
        name: 'Max Lynx',
        notes: 'Odd obsession with everything',
        face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
    }, {
        id: 2,
        name: 'Andrew Jostlen',
        notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
        face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
    }, {
        id: 3,
        name: 'Adam Bradleyson',
        notes: 'I think he needs to buy a boat',
        face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
    }, {
        id: 4,
        name: 'Perry Governor',
        notes: 'Just the nicest guy',
        face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
    }];


    return {
        all: function() {
            return friends;
        },
        get: function(friendId) {
            // Simple index lookup
            return friends[friendId];
        }
    }
});
