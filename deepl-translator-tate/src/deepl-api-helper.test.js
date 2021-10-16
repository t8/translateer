const rewire = require("rewire")
const deepl_api_helper = rewire("./deepl-api-helper")
const getHandleJobsBody = deepl_api_helper.__get__("getHandleJobsBody")
const getAlternativesBody = deepl_api_helper.__get__("getAlternativesBody")
const getSplitSentencesBody = deepl_api_helper.__get__("getSplitSentencesBody")
const getRequestOptions = deepl_api_helper.__get__("getRequestOptions")
// @ponicode
describe("getHandleJobsBody", () => {
    test("0", () => {
        let object = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Pierre Edouard"]
        let object2 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Jean-Philippe", ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let object3 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getHandleJobsBody(param1, "C++", "C++", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Edmond"]
        let object2 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Pierre Edouard", "Michael"]
        let object3 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getHandleJobsBody(param1, "erlang", "javascript", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Jean-Philippe", ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let object2 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "George", ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let object3 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getHandleJobsBody(param1, "lua", "js", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Michael", ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let object2 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Jean-Philippe"]
        let object3 = ["Anas", ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            getHandleJobsBody(param1, "erlang", "javascript", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"], ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let object2 = [["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "Edmond", ["Hello, world!", "Foo bar", "foo bar", "This is a Text"]]
        let param1 = [object, ["Edmond", "Anas", "Pierre Edouard"], object2]
        let callFunction = () => {
            getHandleJobsBody(param1, "javascript", "js", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getHandleJobsBody(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getAlternativesBody", () => {
    test("0", () => {
        let callFunction = () => {
            getAlternativesBody("This is a Text", "javascript", "javascript", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getAlternativesBody("Hello, world!", "javascript", "lua", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getAlternativesBody("This is a Text", "erlang", "lua", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getAlternativesBody("Hello, world!", "python", "C++", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getAlternativesBody("foo bar", "C++", "erlang", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getAlternativesBody(undefined, undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getSplitSentencesBody", () => {
    test("0", () => {
        let callFunction = () => {
            getSplitSentencesBody(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "C++")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getSplitSentencesBody(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "cpp")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getSplitSentencesBody(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "javascript")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getSplitSentencesBody(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "python")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getSplitSentencesBody(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "erlang")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            getSplitSentencesBody(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getRequestOptions", () => {
    test("0", () => {
        let callFunction = () => {
            getRequestOptions("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getRequestOptions(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deepl_api_helper.getTranslation", () => {
    test("0", () => {
        let callFunction = () => {
            deepl_api_helper.getTranslation(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "js", "lua", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deepl_api_helper.getTranslation("George", "python", "js", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deepl_api_helper.getTranslation("Jean-Philippe", "js", "erlang", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deepl_api_helper.getTranslation("Edmond", "js", "erlang", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deepl_api_helper.getTranslation(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "cpp", "javascript", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deepl_api_helper.getTranslation(undefined, undefined, "", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deepl_api_helper.splitSentences", () => {
    test("0", () => {
        let callFunction = () => {
            deepl_api_helper.splitSentences("Edmond", "C++")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deepl_api_helper.splitSentences("Anas", "cpp")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deepl_api_helper.splitSentences(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "javascript")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deepl_api_helper.splitSentences(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "lua")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deepl_api_helper.splitSentences(["Hello, world!", "Foo bar", "foo bar", "This is a Text"], "python")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deepl_api_helper.splitSentences(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deepl_api_helper.getAlternatives", () => {
    test("0", () => {
        let callFunction = () => {
            deepl_api_helper.getAlternatives("Foo bar", "javascript", "python", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            deepl_api_helper.getAlternatives("foo bar", "js", "js", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            deepl_api_helper.getAlternatives("This is a Text", "python", "javascript", false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            deepl_api_helper.getAlternatives("Foo bar", "cpp", "python", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            deepl_api_helper.getAlternatives("Foo bar", "js", "C++", true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            deepl_api_helper.getAlternatives("", undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
