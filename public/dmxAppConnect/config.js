dmx.config({
  "FicheDmd": {
    "arr1": {
      "meta": [
        {
          "name": "code_table",
          "type": "text"
        },
        {
          "name": "id_ligne",
          "type": "number"
        },
        {
          "name": "lib_court",
          "type": "text"
        },
        {
          "name": "lib_long",
          "type": "text"
        },
        {
          "name": "nom_table",
          "type": "text"
        },
        {
          "name": "code_ligne",
          "type": "number"
        },
        {
          "name": "code_suppr",
          "type": "text"
        },
        {
          "name": "id_parent",
          "type": "number"
        }
      ],
      "outputType": "text"
    },
    "GC": {
      "meta": null,
      "outputType": "text"
    },
    "Statut": {
      "meta": null,
      "outputType": "array"
    },
    "dvSatut": {
      "meta": null,
      "outputType": "number"
    },
    "sessionStorage": [
      {
        "type": "text",
        "name": "NOM"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "Nom"
      },
      {
        "type": "text",
        "name": "Adresse"
      },
      {
        "type": "text",
        "name": "Support"
      },
      {
        "type": "text",
        "name": "Email"
      },
      {
        "type": "text",
        "name": "NombreCmpt"
      },
      {
        "type": "text",
        "name": "Tel"
      },
      {
        "type": "text",
        "name": "puissanceSH"
      }
    ]
  },
  "FicheDemande": {
    "sessionStorage": [
      {
        "type": "text",
        "name": "NOM"
      }
    ],
    "localStorage": [
      {
        "type": "text",
        "name": "NOM"
      }
    ],
    "query": [
      {
        "type": "text",
        "name": "Num_dmd"
      }
    ],
    "tableRepeat1": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "name": "nom_doc",
          "type": "text"
        }
      ],
      "outputType": "text"
    }
  },
  "TelechargementFicheDmd": {
    "query": [
      {
        "type": "text",
        "name": "Num_dmd"
      }
    ]
  }
});
