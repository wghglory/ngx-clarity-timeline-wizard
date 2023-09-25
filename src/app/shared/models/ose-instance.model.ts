// https://confluence.eng.vmware.com/display/OSS/OSE+RDE

/**
 * example
 * {
    "harbor": {
        "url": "https://harbor-repo.vmware.com/vcd_ose",
        "username": "foo",
        "tlsCertChain": "<BASE64_PEM_CONTENT>",
        "password": "******"
    },
    "portal": {
        "k8sBR": "/tenant/{orgName}/plugins/Vk13YXJl/oss?redirect-to=kubernetes-cluster",
        "providerHome": "/provider/plugins/Vk13YXJl/oss"
    },
    "service": {
        "conditions": [
            {
                "type": "ReconcileSucceeded",
                "reason": "UpToDate",
                "status": "True",
                "message": "latest valid configuration is already applied",
                "lastTransitionTime": "2023-09-26T03:00:02Z"
            }
        ],
        "serviceStatus": "RUNNING",
        "configurationReference": "1695696935"
    },
    "validation": {
        "spec": {
            "tls": {
                "tlsSource": "SELFSIGNED",
                "tlsCertChain": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN3VENDQWFrQ0FRQXdEUVlKS29aSWh2Y05BUUVMQlFBd0xERUxNQWtHQTFVRUJoTUNWVk14SFRBYkJnTlYKQkFNTUZGUmxjM1FnU1c1MFpYSnRaV1JwWVhSbElFTkJNQjRYRFRJek1Ea3hNekE1TlRJME5sb1hEVEkwTURreApNakE1TlRJME5sb3dJVEVMTUFrR0ExVUVCaE1DVlZNeEVqQVFCZ05WQkFNTUNWUmxjM1FnVEdWaFpqQ0NBU0l3CkRRWUpLb1pJaHZjTkFRRUJCUUFEZ2dFUEFEQ0NBUW9DZ2dFQkFMY1l4cXNIU2NCLzJVZlo0MUdJK013U0MxUVIKVDZNdFl1Mzc0WE9lM2JCL05ET201NmF2MEhPdnJDRWdOUHpFVDlVZmVROVJkUTdUeFpnekZQWWpMYVFadnZUQQplSkR3TzlhWkJIWVo1amJLRnp3WGs4NmxwbmlGVmo1dFJHTUJjQXBzZGxLK3pPM2ZMbHBpSHRIeFlQYWUyWllZClViODlxRUdlNGFEVzVXa2wwTk5mdE1qZTVRdXRGVlB6bEJqMnVrTGd3R0ZRNG5nQXZwWW1QWEVHb0lncHlTZmoKTG9UYXo4SVo5YTBuRWNnRTU1L3dnZ2Y3aEt1b1ZqNitwd2sxM2kwS1plM3JpeVkzdFFabUd4QzdLWC9oSkZrSwpZb1JwKzdHK2dwYjZXbU9FZW92ZXJlZHBqa2ZwTUhxU0VjWUsyUVk0TkJoVmxpdzZJRUF3R1NPRGdvOENBd0VBCkFUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFBR1pKaGw2azlQVGloczg1K0x6TVRUZGEwdzhjZXJwTVBMZ20KV0dzTloyYWljVGVTR2NFZThwSktvUmEvZ2JFQVNFOHRBOG1Wa0I4SGdFZjA0ZENYYSsyMkp4d0FMOTBocHphTgo4RmNYaW5SR0wrcTZnQzBiWnFsR2NxTzg5cjJFdFZQbk9abEtxZ0JCZlFYdlVMYUh3VUxJTkF1WFJkMkQvRFkwCmU5TUxkZHVWRVN4aUFPZHJCRlFzWEw1NUVZZHR5emgvaHVOQzFDdXpkVUFOMjlYcEx0RFROZStkbVFuN1VkUVcKNmxRUE55MUwzQU9EUkdpNXhlY1FQbGR6bDREdXpUVkhVbXJRUitIS01xV2tPOHRIRGI0cG1oOWJpbWh5YUhhawpDUWlMYkFUcW5qdVFBbE5hSUhVd0Rwclo4aUVGZ1ZnOGF5TnlqWFg4WVNZbkxjUlAxdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURMakNDQWhhZ0F3SUJBZ0lCQVRBTkJna3Foa2lHOXcwQkFRc0ZBREFrTVFzd0NRWURWUVFHRXdKVlV6RVYKTUJNR0ExVUVBd3dNVkdWemRDQlNiMjkwSUVOQk1CNFhEVEl6TURreE16QTVORE15TUZvWERUSTFNRGt4TWpBNQpORE15TUZvd0xERUxNQWtHQTFVRUJoTUNWVk14SFRBYkJnTlZCQU1NRkZSbGMzUWdTVzUwWlhKdFpXUnBZWFJsCklFTkJNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQXVSL3ltSC9NU2NhQ3VVZ28KUXVObjYybEYzbzVzWXlLTGtKWVNQS2pBQzJYOG9mcTF0TGw5MitoVWZ5ZWY1ajYraXN4VXlCYytia1E2SUxHNgowK1JNS1VkOEhHR3BGWUhwVlc1bGNCRzNUL1dPM01WNHlTSUxMZzZ2ZXkxNXRvQzNKM1RNdTBmYklWdGs1Zzh2Cmk5RDFSY0c0Qnc5SE1VdjNGV0MrYTZQUnl6dXlFZTA0S2EvbEJ3NFBNbzdWRmdOUHhGUzRpY1ZDZGU0Qy9McHIKcmJWQ2xJZ0ZFb2lFeXpjSVpvUWpmQ2MvL3JheVQ0dXl5M2pQWE1Xd01xOGFjSXpxdld3RHlrWmhYY3dkbk5sZQpGYzJMNWx3SDNjUUs4YTV6TVpSUmVtWURnejVaVmJUZmpSRGJ1azNuRTVCSWdtak96WTNWWmtLVjRla1lGamZvClMwVXJtUUlEQVFBQm8yTXdZVEFQQmdOVkhSTUJBZjhFQlRBREFRSC9NQTRHQTFVZER3RUIvd1FFQXdJQ0JEQWQKQmdOVkhRNEVGZ1FVUXN4czBBWEdHcVFuczJnSzN3TzJ1dE5aWSt3d0h3WURWUjBqQkJnd0ZvQVVOcVRSOTBhdApDVDREYVM0bjZsaXRkaXlSVVVnd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFDVTRpNktxUCtlcVE1TWFQM25oCnhvbC9NTlNmVDdIeUtrM0U2MG5wQ0ZhRmJ4MldZeTJRcHA3eEtUMzNwdkVKUGN6VG9FaFpvbnJOcVBXM0VISm4KT3duQ2l1Y0F5RFJCRWw5QTFSL3B4b1RmQW1rbzVFOHZyQ3pwandkT0IvYlREMUN2bXFlelpwbUQyQXNrWVNqSwpCSmpibnFDRkxYYVF2SVhiTzZVWG1LajhrUDJ2M29VZGl4TUNvV1NjRG9qQnN3MDlBcnpaQ1ArZkZYUktCSmlLCjEyckxVOGdQamhXRHB0QkNxRVFuL1gxMVc5VzNyNVlFVWF2L0Jkc1dSRXdLK1FvTEM3V29zc3UzRE85NUVoTm0Kck5IdzZ3SkVITXcxa1dmU21MNTNFR1Vaa0h4ZWp3STRlKysrRGI0NVdJZjNwQmxNb2pGSUJTeFVjV0RaRitNYQp1Y2M9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURCVENDQWUyZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFrTVFzd0NRWURWUVFHRXdKVlV6RVYKTUJNR0ExVUVBd3dNVkdWemRDQlNiMjkwSUVOQk1CNFhEVEl6TURreE16QTVORE13TWxvWERUSTJNRGt4TWpBNQpORE13TWxvd0pERUxNQWtHQTFVRUJoTUNWVk14RlRBVEJnTlZCQU1NREZSbGMzUWdVbTl2ZENCRFFUQ0NBU0l3CkRRWUpLb1pJaHZjTkFRRUJCUUFEZ2dFUEFEQ0NBUW9DZ2dFQkFLRVdjMVhvU3V6WXVSMVZKcWtjeUx2NXpMYmUKbjlnem5HQ2R6Qi9SU2s4bmVGUWRiUHFlYVlZSFNyYjFUUTlrTmNERjUwRkQ3ZGdnZ0Zxai9WdVE2czBVMkdldwpFYkprdVlEcWsvVE5jZFFza09EZTZXN0ViajgzYnU5QTRtdUU1OEhVWUJsdUlZdFJlYXhzZSt1U21wRHZCRUlhCjN6VHg1NU5JNWJmU0lGNUVocVBBaWV3ZDlDZFRha2dXaGJNM3FnL290YzlYOGNvUXFnZlhpenpXcm1GaThnNEIKdFB2MFMvZFJGc0dmWGtNUkhpT0hUeUNNWU1MWGNiYUY2ZzRsTDhEZjFvamFuOTVLT1FQWU42SkRXNXh2Rnl4VQpic3ZaNS9KdUZqSXdxSWdlSE1sNDNJbzNhb1BheWdFdEUzVU44SXFUNEk5UTMxam1rclNWY3RCbnBGa0NBd0VBCkFhTkNNRUF3RHdZRFZSMFRBUUgvQkFVd0F3RUIvekFPQmdOVkhROEJBZjhFQkFNQ0FnUXdIUVlEVlIwT0JCWUUKRkRhazBmZEdyUWsrQTJrdUorcFlyWFlza1ZGSU1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQ1lyQ04wMnhYdAprRzN6TVBLQVRvakxEOThhV0V5N2RleGFKb08vSVBLQVhFTkdmRmgzYjN6dm04WU1mQkF4c3hWTllFQ3lxcUp6CnEwY3RBbGVmUlNFaU1HK2dmZkhXWHpYSVlIVkQ5aEFhTy9zMWpmWGpXWXE3cWlqU0QwMFB5QXAxcVFXZUNpTnUKM1B4Z3E1eGtTa0tyWmUzMWNUYkVGSmpUZjhzOENOMjB1RDMzVnB0K3FBKzZQbmszS1VnZ0FmbnRjQTYvV2ZNVQpvM2JVRHE5dVBwYlNoZXZnVysyNFJhTTQySlowRlg4U082QWN0SHg5VHQyZHNrUWdiT3R2YmxDQmxITm43d1dQCitUTWRteW9RTXlaUnUvRlc4QUFVQ0lieTB2L1k0YmZRcE91TlpWODRUR2xyamxoQmRoL3VabmFYaVVvTnIxT1MKQ1hSTytxRCtWejRTCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=",
                "tlsPrivateKey": "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRQzNHTWFyQjBuQWY5bEgKMmVOUmlQak1FZ3RVRVUrakxXTHQrK0Z6bnQyd2Z6UXpwdWVtcjlCenI2d2hJRFQ4eEUvVkgza1BVWFVPMDhXWQpNeFQySXkya0diNzB3SGlROER2V21RUjJHZVkyeWhjOEY1UE9wYVo0aFZZK2JVUmpBWEFLYkhaU3ZzenQzeTVhClloN1I4V0QybnRtV0dGRy9QYWhCbnVHZzF1VnBKZERUWDdUSTN1VUxyUlZUODVRWTlycEM0TUJoVU9KNEFMNlcKSmoxeEJxQ0lLY2tuNHk2RTJzL0NHZld0SnhISUJPZWY4SUlIKzRTcnFGWSt2cWNKTmQ0dENtWHQ2NHNtTjdVRwpaaHNRdXlsLzRTUlpDbUtFYWZ1eHZvS1crbHBqaEhxTDNxM25hWTVINlRCNmtoSEdDdGtHT0RRWVZaWXNPaUJBCk1Ca2pnNEtQQWdNQkFBRUNnZ0VBR1AyUHVDNUJlYjI1ZVY0YThia0JSRkUrTEpaRVNXQmJmV0lBcnBoRForQ2sKemx2OGlEcTg5OTFGWUN3V0wxM1lDNTNGRnpzbUFBVVZsaVY2dWZHcFBCbXJmNXA1bWthLzFCV0VqMTRQbHZEVQpaUVpPelVpOHhQeGwvaFZKM1QySC9sUTVmaWUrcnNUa2ZiK2d0MFQ3MkExc1kxa2taemJTTFVxelB4RzF0RGtUCkFobUgyckllWTFDVU04cG5sYWhMa1NNM25EcmpGM29zVnpub0g0VXJNY1Y3TjFqRTF4VzRrUE9TZkowZTMzZEEKaDdhTFhwTjNib3FBWUdkcXRFaGtjVXRWbW91Zk1jekwyUE5sYlRzREdtc09HNFNkeXJNczNCVlNyOURON09WbQpha0RGS3JaNU9lN09NZlU3bmJjenRJNUwvUzhpNjVEeU5NcXRITnd2c1FLQmdRRGF0QzN1U2JDbmUvV0tUK3RyCjBWZUZ3bldTVlJZL1Qrc2ZSOSs2bEJwMVY0alFIVjR1STFNNWFCOG81dkg2OVVFSFVORVJhdHhqOE5xS21JenIKZWxKK1Bzay9wMDU4UW1FRXU0OFgvaWtOTFE3bnRyUEJLdWtLZGs0NnRjTi9MOTJoRVl0SE5qSTJDY3dFVGZPWAp6K3kvVWFVdWZ0eVdXWDl6Qml0UWVzV3Qxd0tCZ1FEV1VoOFdtSW5EUWpBb28vZk9FZURTbzhVTlJBMFlRYW1lClBFUk1LTUZrRmtCRXR5NHhsUEZKM0lJdmVoNnFrWFBGVW5ER0VWSWdsaDJsVktLVFcwamxPRXlTVVRtT1lJaUsKRUd1OFpMbHNqMUZuK2QwL0xSMnorcm1jTURmZGgwdjVaZmpkdkNGbE9XUVBHcE9jL2pHRldZSHJxQmZ5dVZrQgpYLy82ZjZvS0NRS0JnQWdMdHVEY1R5WnFOZ2RIbDJhWkJmcEN4Q2FGQU5PRmNpWHRjL3FlTmpiNDZHeVhsLzVrCmlFeEZXMWdhM3U0WGxiUGFNa2JNd3B6ZW9IdVd6eUJlbUtoU1VQOEpmYWF1bm5rWkdWT05veDc3K0Y5bjVrY0YKK0JyTmJXVlZpSUttVlNYMnlrUHRaMzE3Y01qN3dTbGxtZFVVQU5xc0NodHg0WEZ1MmFzVlNTNXpBb0dCQUl5ZAp6dVh0YVIzaWRHU0Z5Rlc5Snl3czVXSGh6MUdsNjFyMW9iM3lVNGlPak5aSTlaYjBhU2VUOVJxZlhqVjlQMThzCnl1ODVlQkFIVGlZbWxKQm9LVGl6cXBHcGwwRFNGMk8yaUdsUUVOU29aN24zbDNFVzhkRWZaTjZVU0dNaG5QaGkKTGxtVlVMZndZclVDTSsyaVhlMW5IN1gxVU5raFFNT0ZNQmN6NGVXNUFvR0JBSytkazdkbm4wOE5oVnlQR1c2ZgpyODdIV3dNVkgySEd4bHYrZDBxU2poWTEvOW5LNTJjWk9vRXZFR21TT1B6SFNqUXBCQ3JHWU15TzZzdmM4eGNZCm1YalVwN2IxaFI4RS92Tk1xbC94dGlTUUJSamZuWWd1Qnk1Sm5oVTZqbGdHdWlLWXAwMG90a2lkTHl3N0h0OGsKQWdTR3M3WDhxT1M0eGhmbnpmSmEydDYxCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0K"
            },
            "vcd": {
                "endpoint": "https://alp-vcd102.eng.vmware.com",
                "tokenName": "app-server",
                "tlsCertChain": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUQ4akNDQXRxZ0F3SUJBZ0lKQUtFNVhZY200WXdRTUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdiTVFzd0NRWUQKVlFRR0V3SlZVekVMTUFrR0ExVUVDQXdDUTBFeEVqQVFCZ05WQkFjTUNWQmhiRzhnUVd4MGJ6RVVNQklHQTFVRQpDZ3dMVmsxM1lYSmxJRWx1WXk0eERUQUxCZ05WQkFzTUJGWkRVRkF4SWpBZ0Jna3Foa2lHOXcwQkNRRVdFM2RwCmJHeHBZVzE2UUhadGQyRnlaUzVqYjIweElqQWdCZ05WQkFNTUdXRnNjQzEyWTJReE1ESXVaVzVuTG5adGQyRnkKWlM1amIyMHdIaGNOTWpNd05URTFNRE13T1RBd1doY05Nek13TlRFeU1ETXdPVEF3V2pDQm16RUxNQWtHQTFVRQpCaE1DVlZNeEN6QUpCZ05WQkFnTUFrTkJNUkl3RUFZRFZRUUhEQWxRWVd4dklFRnNkRzh4RkRBU0JnTlZCQW9NCkMxWk5kMkZ5WlNCSmJtTXVNUTB3Q3dZRFZRUUxEQVJXUTFCUU1TSXdJQVlKS29aSWh2Y05BUWtCRmhOM2FXeHMKYVdGdGVrQjJiWGRoY21VdVkyOXRNU0l3SUFZRFZRUUREQmxoYkhBdGRtTmtNVEF5TG1WdVp5NTJiWGRoY21VdQpZMjl0TUlJQklqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FROEFNSUlCQ2dLQ0FRRUF1S3NFNE5tK2pLaThMR1ZXCmlid0N4em1oM2U4VDUvYlIzczJMeEs5L25jUkNoYmM3ZytFS0pKQ0hVRmwvckptS0xhdWxUVlR4VVYwSXpZck8KcjNuRitIMmJHcDcxQjJ1Zzh3K3lMZ0JoNjNwU2VCQnBub1lSYU1Ta3ltc0UrRXhqWnlGcUNaY0JMQ2F0M1ZhdwpPdVd1eDJSL1Jmcjl4amdiMGpWWFlRSjNxY2U3bjdRdDhxejRWd1JMYjQ3R2IwRlJ4a3Z0dWZoNzQwSFozelcwClRQWW0zNURCUHVaQm9UQVQzbW1TME9mc0JZdEt2YkJic3k3bzJTQXF0amswcFNpdDB2WnhzbUJ1ZUtsOFgrcFMKVGh3Y052eDBSOWJybHlWb2NiVGpWaTBhbC9QV1ZTWFlJQzNncFBJWEMyMlNveEltVWZFcEJYQnVSY3FpUDBtMApPOGxCS3dJREFRQUJvemN3TlRBekJnTlZIUkVFTERBcWdobGhiSEF0ZG1Oa01UQXlMbVZ1Wnk1MmJYZGhjbVV1ClkyOXRnZzB4TUM0eE16a3VNVEV6TGpnek1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQ2tGdkZqYXFhL21qZGgKN1JuL2VsOTI4ODdQSUJzZGJOcmt3eDVZODcxamFuQUh5SHJZTE1zZXV6R2tyeUZmcmM1S0JkYjJHYnNUVERjQgptOTJCY1pLdHhSeXViSEw0Z1dObkhMTEZqeGJwZmYzc3BkdXg2UnF3SkowSlJRVWRpVjFDU3Fla3NLeHpYckwyCi9nMDFDSzNoVWpqOGFlYitYc3NGellTaTN2d0xlTDVvQ0RDNWpFWTFUa0lWVDlySURERjIvanR4Z3o5SS9iekgKUk15aHJJR2VQV2ZjbTgyL1NZWWtJU0c2UUFJZ3JRZlU0V01NaG1aYlhMbFpvT2xVZ29ja3lWOEEraUJnSG9PeAo1Z2pyblJlSFZlWnlOck83eFpaSm1uOU1VblgxQjJRdTBtRkNBWjhwYUp1VFBKUm9sR29Kd21BUDZLd3lqQ0xXCnNlbHQxQkR6Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
                "tlsSignature": "a416f1636aa6bf9a3761ed19ff7a5f76f3cecf201b1d6cdae4c31e58f3bd636a7007c87ad82ccb1ebb31a4af215fadce4a05d6f619bb134c37019bdd817192adc51cae6c72f88163671cb2c58f16e97dfdeca5dbb1e91ab0249d0945051d895d424aa7a4b0ac735eb2f6fe0d3508ade15238fc69e6fe5ecb05cd84a2defc0b78be680830b98c46354e42154fdac80c3176fe3b71833f48fdbcc744cca1ac819e3d67dc9bcdbf4986242121ba400220ad07d4e1630c86665b5cb959a0e954828724c95f00fa20601e83b1e608eb9d178755e67236b3bbc596499a7f4c5275f507642ed26142019f29689b933c9468946a09c2600fe8ac328c22d6b1e96dd410f3",
                "apiToken": "******"
            },
            "database": {
                "port": 5432,
                "dbName": "ossdb",
                "sslMode": "DISABLE",
                "hostname": "10.139.113.102",
                "username": "oseadmin",
                "configType": "CONNECTION",
                "password": "******"
            },
            "platforms": [
                {
                    "s3": {
                        "url": "https://10.139.113.213:2324"
                    },
                    "admin": {
                        "url": "https://10.139.113.213:2325",
                        "password": "ca$hc0w",
                        "username": "root"
                    },
                    "osisName": "minio",
                    "platform": "OSIS"
                },
                {
                    "s3": {
                        "url": "https://app-vcd101.eng.vmware.com:22222",
                        "tlsCertChain": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUVaakNDQTA2Z0F3SUJBZ0lRS3d0aWN5Z3FESzJSWk9CdEdqODZ6akFOQmdrcWhraUc5dzBCQVFzRkFEQ0IKeERFTE1Ba0dBMVVFQmhNQ1ZWTXhFekFSQmdOVkJBZ1RDa05oYkdsbWIzSnVhV0V4RWpBUUJnTlZCQWNUQ1ZOaApiaUJOWVhSbGJ6RWlNQ0FHQTFVRUNSTVpNVGMzSUVKdmRtVjBJRkp2WVdRc0lGTjFhWFJsSURRMU1ERU9NQXdHCkExVUVFUk1GT1RRME1ESXhGekFWQmdOVkJBb1REa05zYjNWa2FXRnVMQ0JKYm1NdU1TWXdKQVlEVlFRTEV4MVQKWld4bUxWTnBaMjVsWkNCRFpYSjBhV1pwWTJGMFpYTWdWVzVwZERFWE1CVUdBMVVFQXhNT01UQXVNVE01TGpFeApNeTR5TWpFd0hoY05Nakl3T0RBeU1EUXpOVEEwV2hjTk1qTXdPREF6TURRek5UQTBXakNCeERFTE1Ba0dBMVVFCkJoTUNWVk14RXpBUkJnTlZCQWdUQ2tOaGJHbG1iM0p1YVdFeEVqQVFCZ05WQkFjVENWTmhiaUJOWVhSbGJ6RWkKTUNBR0ExVUVDUk1aTVRjM0lFSnZkbVYwSUZKdllXUXNJRk4xYVhSbElEUTFNREVPTUF3R0ExVUVFUk1GT1RRMApNREl4RnpBVkJnTlZCQW9URGtOc2IzVmthV0Z1TENCSmJtTXVNU1l3SkFZRFZRUUxFeDFUWld4bUxWTnBaMjVsClpDQkRaWEowYVdacFkyRjBaWE1nVlc1cGRERVhNQlVHQTFVRUF4TU9NVEF1TVRNNUxqRXhNeTR5TWpFd2dnRWkKTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCRHdBd2dnRUtBb0lCQVFEdVUzVC8yOWRrNkw3NkZBR0o2V1crZnBMNApvQldRb1ZKKzB6MzNGZTVlb25WMkJOZXpYbllVWUhOMXVYeGVYQlJBTXNhZTZyUTJDVnNycDc2RlArck1JdFpBClg1cU5PaFNLc3crdFdtMkhKbVV4bno1THBRU1dtOHhsVjFCZ3ZhVXN6aWZ6SmlDMFBRbkphN1IyQWVRdjJ0Z28KNzVsK3RmOHNYOW5YZDFTa011MnNoTkZjL1lHMGFXa2FNcHgybm01dHdUTm1vNnFBZGVndnZDRTRpM055U2lYTgo0Sml1d3lSa2ZvdUlQWXlYMWU0b1pkaHlwUHlWYWV5QUhzMUVQTnltY3JlMWV2MWx6RmFpc2F2eW9uTzgwdktSCldsR3Q3ZVF1KzVCRnRCTWRNaVBEUk5CL2tCbld4NWs2NytEclhab2NnMkRicU8rK29zNWJ3MHFmQ0RoaEFnTUIKQUFHalVqQlFNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBVEFNQmdOVgpIUk1CQWY4RUFqQUFNQnNHQTFVZEVRUVVNQktDRUNvdU1UQXVNVE01TGpFeE15NHlNakV3RFFZSktvWklodmNOCkFRRUxCUUFEZ2dFQkFOZS9zRjdORlpaZmoyM3VnWk9zUjJYWE5oQ1FhbG9MczE5WTQyZ2RQaU9vaHF0THJlTmsKeUhlZWZ6dHc3MEd5eUpBUnJEMzhtWFlrcDQ3TUZSUkpzNWdDSFZ1bVZ5ZWxaWURyMW53K1E0V3ZhaS9oQmw2dgpLVlk4NmFoYjFjQk9Bcnhad2hQNVZWcWNKU2YxQkhpUW9RNXh3WGZqTUdEWkZRWHcwL2hYQ01HUFdzMU9KczhvCkVhWTE4MWJrQXpIRGtIaFFleUlxblV1eVJrRFdjc29lK2NlekhQazQ5WjUvc1dqeUhOYWREMU9tVWdhcWl5QVYKaUlDT3N1bkc3YW5aMjBlYlNRMEJHNGwxd01FRUpjcUIrdlE4cVMrTGVJWENsMUFGa1pRemV0ZERkc2t4M1FLMQpveklOVzhjcjVob1B4Y1ZaRkJUSUY0OWo2K0l6N1JzTElXbz0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
                        "tlsSignature": "d7bfb05ecd15965f8f6dee8193ac4765d73610906a5a0bb35f58e3681d3e23a886ab4bade364c8779e7f3b70ef41b2c89011ac3dfc997624a78ecc151449b398021d5ba65727a56580ebd67c3e4385af6a2fe1065eaf29563ce9a85bd5c04e02bc59c213f9555a9c2527f5047890a10e71c177e33060d91505f0d3f85708c18f5acd4e26cf2811a635f356e40331c39078507b222a9d4bb24640d672ca1ef9c7b31cf938f59e7fb168f21cd69d0f53a65206aa8b201588808eb2e9c6eda9d9db479b490d011b8975c0c10425ca81faf43ca92f8b7885c29750059194337ad74376c931dd02b5a3320d5bc72be61a0fc5c5591414c8178f63ebe233ed1b0b216a"
                    },
                    "iam": {
                        "url": "http://10.139.113.221:16080"
                    },
                    "admin": {
                        "url": "https://10.139.113.221:59443",
                        "password": "XzfyARI9wxxEmumarUZuuL5jVCU=",
                        "username": "sysadmin",
                        "tlsCertChain": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUVTVENDQXpHZ0F3SUJBZ0lRV2JPbWJTcTd2MGNYTlVSS1ZKL2FCVEFOQmdrcWhraUc5dzBCQVFzRkFEQ0IKeERFTE1Ba0dBMVVFQmhNQ1ZWTXhFekFSQmdOVkJBZ1RDa05oYkdsbWIzSnVhV0V4RWpBUUJnTlZCQWNUQ1ZOaApiaUJOWVhSbGJ6RWlNQ0FHQTFVRUNSTVpNVGMzSUVKdmRtVjBJRkp2WVdRc0lGTjFhWFJsSURRMU1ERU9NQXdHCkExVUVFUk1GT1RRME1ESXhGekFWQmdOVkJBb1REa05zYjNWa2FXRnVMQ0JKYm1NdU1TWXdKQVlEVlFRTEV4MVQKWld4bUxWTnBaMjVsWkNCRFpYSjBhV1pwWTJGMFpYTWdWVzVwZERFWE1CVUdBMVVFQXhNT01UQXVNVE01TGpFeApNeTR5TWpFd0hoY05Nakl3TnpFMk1UUXpNekkyV2hjTk1qTXdOekUzTVRRek16STJXakNCeERFTE1Ba0dBMVVFCkJoTUNWVk14RXpBUkJnTlZCQWdUQ2tOaGJHbG1iM0p1YVdFeEVqQVFCZ05WQkFjVENWTmhiaUJOWVhSbGJ6RWkKTUNBR0ExVUVDUk1aTVRjM0lFSnZkbVYwSUZKdllXUXNJRk4xYVhSbElEUTFNREVPTUF3R0ExVUVFUk1GT1RRMApNREl4RnpBVkJnTlZCQW9URGtOc2IzVmthV0Z1TENCSmJtTXVNU1l3SkFZRFZRUUxFeDFUWld4bUxWTnBaMjVsClpDQkRaWEowYVdacFkyRjBaWE1nVlc1cGRERVhNQlVHQTFVRUF4TU9NVEF1TVRNNUxqRXhNeTR5TWpFd2dnRWkKTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCRHdBd2dnRUtBb0lCQVFDVzBpS0hMN2hmZWVveXJ5Z2dOSHdZQWw2MApaK25Kc0NSUFhQZGRSSjlZNW1HUzBhQ2tsVnIyTlRMTlNubXRQZytnc3NSWHdPUjBFaVZGM251bHVCc3hWS3FuClBjUmNxSmJBaktteXRmejdlbDdqcytMSTRPSWtDTUZUSys0THU1ekkvZnJ3TW1hRTVNS2t6dGFaK1Z2bGp4Q0EKWEpvL1Ayb0hhWTczNFIvbDU2TU9iaDArcjBPbFVOSE96QytkV3UrdnVtZTVhaHduN1ZJK1hMQTVQaWdWcnUwMgo5VmdBWk5aMGIxajJ3dm14TDV5R1NIK0t3bGlwMnNTNk5YN1BNRGdFWThTZ05MWWZDMDV4aURycmh4Z2xmYXZFCjU3Unh2NFNhV1Z1YkpWandqbGt0Z0lLQ2E1N0hrNVNvWVFxNzcxcEo1ZTgxSEgvaG92WTB3QmdEYUhxSEFnTUIKQUFHak5UQXpNQTRHQTFVZER3RUIvd1FFQXdJRm9EQVRCZ05WSFNVRUREQUtCZ2dyQmdFRkJRY0RBVEFNQmdOVgpIUk1CQWY4RUFqQUFNQTBHQ1NxR1NJYjNEUUVCQ3dVQUE0SUJBUUE4TWRhakxhdEQvWFlBT3grMEU2aVI0dndDCjQ4bFBJUnhKV2J3cloybjIzQ0xaenhwdnNTSzUvYVdrNGlXaW9lSUx0ZGI5RTNZeUpvT3RDUTdnTHJpOU5naFgKRnY2ejdQbndKVll0VEJsL0hNWE1pVFFmamRiMnVlczN2Q1VvWHdic0MrS2RMN2MvZFN1d1ByYXhqd2RPWHVIdQppbVYrSXhtQ2c2MlV2WWxiZTVoV3JzS25VRmdBWkl6ZzBuR2hvQmlva0l5RS8wdWRnUEVXRTc0djZGY2lTK1h6CnBrbG8wQlczTlF3WjRHM25GamV2QUYzM2pSUlV4NndGSjRmZGpnV0Z3djFLQzF6QkRGdE5kWS81Y3dYV21hdkIKTFh1TldoaE9XMndWUVVQTVNkSTNGeG84T25qZ3lQdU1rSGJPa25ScFpJRW1GRjVHUWdpbnJRbnpERCsyCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0K",
                        "tlsSignature": "3c31d6a32dab43fd76003b1fb413a891e2fc02e3c94f211c4959bc2b6769f6dc22d9cf1a6fb122b9fda5a4e225a2a1e20bb5d6fd1376322683ad090ee02eb8bd36085716feb3ecf9f025562d4c197f1cc5cc89341f8dd6f6b9eb37bc25285f06ec0be29d2fb73f752bb03eb6b18f074e5ee1ee8a657e23198283ad94bd895b7b9856aec2a7505800648ce0d271a1a018a8908c84ff4b9d80f11613be2fe857224be5f3a64968d015b7350c19e06de71637af005df78d1454c7ac052787dd8e0585c2fd4a0b5cc10c5b4d758ff97305d699abc12d7b8d5a184e5b6c154143cc49d237171a3c3a78e0c8fb8c9076ce927469648126145e464208a7ad09f30c3fb6"
                    },
                    "console": {
                        "url": "https://10.139.113.213:2323",
                        "secretKey": "console secret"
                    },
                    "platform": "CLOUDIAN"
                },
                {
                    "region": "us-west-1",
                    "platform": "AMAZON",
                    "accessKey": "wrewouirewrew",
                    "secretKey": "=-0'l;lrewrew"
                },
                {
                    "s3": {
                        "url": "https://10.139.113.213:2324"
                    },
                    "admin": {
                        "url": "https://10.139.113.213:2325",
                        "password": "ca$hc0w",
                        "username": "root"
                    },
                    "console": {
                        "url": "https://10.139.113.213:2323"
                    },
                    "platform": "ECS"
                }
            ],
            "resources": {
                "limits": {
                    "cpu": "2",
                    "memory": "2Gi"
                },
                "requests": {
                    "cpu": "0.5",
                    "memory": "100Mi"
                }
            },
            "s3Endpoint": {
                "url": "http://10.139.113.133:8080",
                "region": "us-south-1"
            },
            "s3Replicas": 2,
            "adminEndpoint": {
                "url": "https://admin.ose.example.com"
            },
            "currentPlatform": "CLOUDIAN",
            "otherProperties": {
                "oss.vcd-endpoint.password": "vmware",
                "oss.vcd-endpoint.username": "admin@system",
                "logging.level.org.apache.http.wire": "DEBUG"
            },
            "managementReplicas": 1
        },
        "conditions": [],
        "configurationReference": "1695696935"
    },
    "oseAppImage": "harbor-repo.vmware.com/pcdl/app-be:3.0.0.1",
    "kubeOperator": {
        "clusterId": "k8s cluster id",
        "apiTokenName": "app-operator-api-token",
        "serviceStatus": "RUNNING",
        "packageVersion": "1.0.0",
        "packageLocation": "projects.registry.vmware.com/ose/vcd-object-storage-extension-package-repo:1.0.0",
        "lastSeenTimestamp": "2016-10-04T12:25:39Z"
    },
    "configuration": {
        "uid": "1695696935",
        "spec": {
            "tls": {
                "tlsSource": "SELFSIGNED",
                "tlsCertChain": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUN3VENDQWFrQ0FRQXdEUVlKS29aSWh2Y05BUUVMQlFBd0xERUxNQWtHQTFVRUJoTUNWVk14SFRBYkJnTlYKQkFNTUZGUmxjM1FnU1c1MFpYSnRaV1JwWVhSbElFTkJNQjRYRFRJek1Ea3hNekE1TlRJME5sb1hEVEkwTURreApNakE1TlRJME5sb3dJVEVMTUFrR0ExVUVCaE1DVlZNeEVqQVFCZ05WQkFNTUNWUmxjM1FnVEdWaFpqQ0NBU0l3CkRRWUpLb1pJaHZjTkFRRUJCUUFEZ2dFUEFEQ0NBUW9DZ2dFQkFMY1l4cXNIU2NCLzJVZlo0MUdJK013U0MxUVIKVDZNdFl1Mzc0WE9lM2JCL05ET201NmF2MEhPdnJDRWdOUHpFVDlVZmVROVJkUTdUeFpnekZQWWpMYVFadnZUQQplSkR3TzlhWkJIWVo1amJLRnp3WGs4NmxwbmlGVmo1dFJHTUJjQXBzZGxLK3pPM2ZMbHBpSHRIeFlQYWUyWllZClViODlxRUdlNGFEVzVXa2wwTk5mdE1qZTVRdXRGVlB6bEJqMnVrTGd3R0ZRNG5nQXZwWW1QWEVHb0lncHlTZmoKTG9UYXo4SVo5YTBuRWNnRTU1L3dnZ2Y3aEt1b1ZqNitwd2sxM2kwS1plM3JpeVkzdFFabUd4QzdLWC9oSkZrSwpZb1JwKzdHK2dwYjZXbU9FZW92ZXJlZHBqa2ZwTUhxU0VjWUsyUVk0TkJoVmxpdzZJRUF3R1NPRGdvOENBd0VBCkFUQU5CZ2txaGtpRzl3MEJBUXNGQUFPQ0FRRUFBR1pKaGw2azlQVGloczg1K0x6TVRUZGEwdzhjZXJwTVBMZ20KV0dzTloyYWljVGVTR2NFZThwSktvUmEvZ2JFQVNFOHRBOG1Wa0I4SGdFZjA0ZENYYSsyMkp4d0FMOTBocHphTgo4RmNYaW5SR0wrcTZnQzBiWnFsR2NxTzg5cjJFdFZQbk9abEtxZ0JCZlFYdlVMYUh3VUxJTkF1WFJkMkQvRFkwCmU5TUxkZHVWRVN4aUFPZHJCRlFzWEw1NUVZZHR5emgvaHVOQzFDdXpkVUFOMjlYcEx0RFROZStkbVFuN1VkUVcKNmxRUE55MUwzQU9EUkdpNXhlY1FQbGR6bDREdXpUVkhVbXJRUitIS01xV2tPOHRIRGI0cG1oOWJpbWh5YUhhawpDUWlMYkFUcW5qdVFBbE5hSUhVd0Rwclo4aUVGZ1ZnOGF5TnlqWFg4WVNZbkxjUlAxdz09Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURMakNDQWhhZ0F3SUJBZ0lCQVRBTkJna3Foa2lHOXcwQkFRc0ZBREFrTVFzd0NRWURWUVFHRXdKVlV6RVYKTUJNR0ExVUVBd3dNVkdWemRDQlNiMjkwSUVOQk1CNFhEVEl6TURreE16QTVORE15TUZvWERUSTFNRGt4TWpBNQpORE15TUZvd0xERUxNQWtHQTFVRUJoTUNWVk14SFRBYkJnTlZCQU1NRkZSbGMzUWdTVzUwWlhKdFpXUnBZWFJsCklFTkJNSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQXVSL3ltSC9NU2NhQ3VVZ28KUXVObjYybEYzbzVzWXlLTGtKWVNQS2pBQzJYOG9mcTF0TGw5MitoVWZ5ZWY1ajYraXN4VXlCYytia1E2SUxHNgowK1JNS1VkOEhHR3BGWUhwVlc1bGNCRzNUL1dPM01WNHlTSUxMZzZ2ZXkxNXRvQzNKM1RNdTBmYklWdGs1Zzh2Cmk5RDFSY0c0Qnc5SE1VdjNGV0MrYTZQUnl6dXlFZTA0S2EvbEJ3NFBNbzdWRmdOUHhGUzRpY1ZDZGU0Qy9McHIKcmJWQ2xJZ0ZFb2lFeXpjSVpvUWpmQ2MvL3JheVQ0dXl5M2pQWE1Xd01xOGFjSXpxdld3RHlrWmhYY3dkbk5sZQpGYzJMNWx3SDNjUUs4YTV6TVpSUmVtWURnejVaVmJUZmpSRGJ1azNuRTVCSWdtak96WTNWWmtLVjRla1lGamZvClMwVXJtUUlEQVFBQm8yTXdZVEFQQmdOVkhSTUJBZjhFQlRBREFRSC9NQTRHQTFVZER3RUIvd1FFQXdJQ0JEQWQKQmdOVkhRNEVGZ1FVUXN4czBBWEdHcVFuczJnSzN3TzJ1dE5aWSt3d0h3WURWUjBqQkJnd0ZvQVVOcVRSOTBhdApDVDREYVM0bjZsaXRkaXlSVVVnd0RRWUpLb1pJaHZjTkFRRUxCUUFEZ2dFQkFDVTRpNktxUCtlcVE1TWFQM25oCnhvbC9NTlNmVDdIeUtrM0U2MG5wQ0ZhRmJ4MldZeTJRcHA3eEtUMzNwdkVKUGN6VG9FaFpvbnJOcVBXM0VISm4KT3duQ2l1Y0F5RFJCRWw5QTFSL3B4b1RmQW1rbzVFOHZyQ3pwandkT0IvYlREMUN2bXFlelpwbUQyQXNrWVNqSwpCSmpibnFDRkxYYVF2SVhiTzZVWG1LajhrUDJ2M29VZGl4TUNvV1NjRG9qQnN3MDlBcnpaQ1ArZkZYUktCSmlLCjEyckxVOGdQamhXRHB0QkNxRVFuL1gxMVc5VzNyNVlFVWF2L0Jkc1dSRXdLK1FvTEM3V29zc3UzRE85NUVoTm0Kck5IdzZ3SkVITXcxa1dmU21MNTNFR1Vaa0h4ZWp3STRlKysrRGI0NVdJZjNwQmxNb2pGSUJTeFVjV0RaRitNYQp1Y2M9Ci0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0KLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURCVENDQWUyZ0F3SUJBZ0lCQURBTkJna3Foa2lHOXcwQkFRc0ZBREFrTVFzd0NRWURWUVFHRXdKVlV6RVYKTUJNR0ExVUVBd3dNVkdWemRDQlNiMjkwSUVOQk1CNFhEVEl6TURreE16QTVORE13TWxvWERUSTJNRGt4TWpBNQpORE13TWxvd0pERUxNQWtHQTFVRUJoTUNWVk14RlRBVEJnTlZCQU1NREZSbGMzUWdVbTl2ZENCRFFUQ0NBU0l3CkRRWUpLb1pJaHZjTkFRRUJCUUFEZ2dFUEFEQ0NBUW9DZ2dFQkFLRVdjMVhvU3V6WXVSMVZKcWtjeUx2NXpMYmUKbjlnem5HQ2R6Qi9SU2s4bmVGUWRiUHFlYVlZSFNyYjFUUTlrTmNERjUwRkQ3ZGdnZ0Zxai9WdVE2czBVMkdldwpFYkprdVlEcWsvVE5jZFFza09EZTZXN0ViajgzYnU5QTRtdUU1OEhVWUJsdUlZdFJlYXhzZSt1U21wRHZCRUlhCjN6VHg1NU5JNWJmU0lGNUVocVBBaWV3ZDlDZFRha2dXaGJNM3FnL290YzlYOGNvUXFnZlhpenpXcm1GaThnNEIKdFB2MFMvZFJGc0dmWGtNUkhpT0hUeUNNWU1MWGNiYUY2ZzRsTDhEZjFvamFuOTVLT1FQWU42SkRXNXh2Rnl4VQpic3ZaNS9KdUZqSXdxSWdlSE1sNDNJbzNhb1BheWdFdEUzVU44SXFUNEk5UTMxam1rclNWY3RCbnBGa0NBd0VBCkFhTkNNRUF3RHdZRFZSMFRBUUgvQkFVd0F3RUIvekFPQmdOVkhROEJBZjhFQkFNQ0FnUXdIUVlEVlIwT0JCWUUKRkRhazBmZEdyUWsrQTJrdUorcFlyWFlza1ZGSU1BMEdDU3FHU0liM0RRRUJDd1VBQTRJQkFRQ1lyQ04wMnhYdAprRzN6TVBLQVRvakxEOThhV0V5N2RleGFKb08vSVBLQVhFTkdmRmgzYjN6dm04WU1mQkF4c3hWTllFQ3lxcUp6CnEwY3RBbGVmUlNFaU1HK2dmZkhXWHpYSVlIVkQ5aEFhTy9zMWpmWGpXWXE3cWlqU0QwMFB5QXAxcVFXZUNpTnUKM1B4Z3E1eGtTa0tyWmUzMWNUYkVGSmpUZjhzOENOMjB1RDMzVnB0K3FBKzZQbmszS1VnZ0FmbnRjQTYvV2ZNVQpvM2JVRHE5dVBwYlNoZXZnVysyNFJhTTQySlowRlg4U082QWN0SHg5VHQyZHNrUWdiT3R2YmxDQmxITm43d1dQCitUTWRteW9RTXlaUnUvRlc4QUFVQ0lieTB2L1k0YmZRcE91TlpWODRUR2xyamxoQmRoL3VabmFYaVVvTnIxT1MKQ1hSTytxRCtWejRTCi0tLS0tRU5EIENFUlRJRklDQVRFLS0tLS0=",
                "tlsPrivateKey": "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUV2Z0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktnd2dnU2tBZ0VBQW9JQkFRQzNHTWFyQjBuQWY5bEgKMmVOUmlQak1FZ3RVRVUrakxXTHQrK0Z6bnQyd2Z6UXpwdWVtcjlCenI2d2hJRFQ4eEUvVkgza1BVWFVPMDhXWQpNeFQySXkya0diNzB3SGlROER2V21RUjJHZVkyeWhjOEY1UE9wYVo0aFZZK2JVUmpBWEFLYkhaU3ZzenQzeTVhClloN1I4V0QybnRtV0dGRy9QYWhCbnVHZzF1VnBKZERUWDdUSTN1VUxyUlZUODVRWTlycEM0TUJoVU9KNEFMNlcKSmoxeEJxQ0lLY2tuNHk2RTJzL0NHZld0SnhISUJPZWY4SUlIKzRTcnFGWSt2cWNKTmQ0dENtWHQ2NHNtTjdVRwpaaHNRdXlsLzRTUlpDbUtFYWZ1eHZvS1crbHBqaEhxTDNxM25hWTVINlRCNmtoSEdDdGtHT0RRWVZaWXNPaUJBCk1Ca2pnNEtQQWdNQkFBRUNnZ0VBR1AyUHVDNUJlYjI1ZVY0YThia0JSRkUrTEpaRVNXQmJmV0lBcnBoRForQ2sKemx2OGlEcTg5OTFGWUN3V0wxM1lDNTNGRnpzbUFBVVZsaVY2dWZHcFBCbXJmNXA1bWthLzFCV0VqMTRQbHZEVQpaUVpPelVpOHhQeGwvaFZKM1QySC9sUTVmaWUrcnNUa2ZiK2d0MFQ3MkExc1kxa2taemJTTFVxelB4RzF0RGtUCkFobUgyckllWTFDVU04cG5sYWhMa1NNM25EcmpGM29zVnpub0g0VXJNY1Y3TjFqRTF4VzRrUE9TZkowZTMzZEEKaDdhTFhwTjNib3FBWUdkcXRFaGtjVXRWbW91Zk1jekwyUE5sYlRzREdtc09HNFNkeXJNczNCVlNyOURON09WbQpha0RGS3JaNU9lN09NZlU3bmJjenRJNUwvUzhpNjVEeU5NcXRITnd2c1FLQmdRRGF0QzN1U2JDbmUvV0tUK3RyCjBWZUZ3bldTVlJZL1Qrc2ZSOSs2bEJwMVY0alFIVjR1STFNNWFCOG81dkg2OVVFSFVORVJhdHhqOE5xS21JenIKZWxKK1Bzay9wMDU4UW1FRXU0OFgvaWtOTFE3bnRyUEJLdWtLZGs0NnRjTi9MOTJoRVl0SE5qSTJDY3dFVGZPWAp6K3kvVWFVdWZ0eVdXWDl6Qml0UWVzV3Qxd0tCZ1FEV1VoOFdtSW5EUWpBb28vZk9FZURTbzhVTlJBMFlRYW1lClBFUk1LTUZrRmtCRXR5NHhsUEZKM0lJdmVoNnFrWFBGVW5ER0VWSWdsaDJsVktLVFcwamxPRXlTVVRtT1lJaUsKRUd1OFpMbHNqMUZuK2QwL0xSMnorcm1jTURmZGgwdjVaZmpkdkNGbE9XUVBHcE9jL2pHRldZSHJxQmZ5dVZrQgpYLy82ZjZvS0NRS0JnQWdMdHVEY1R5WnFOZ2RIbDJhWkJmcEN4Q2FGQU5PRmNpWHRjL3FlTmpiNDZHeVhsLzVrCmlFeEZXMWdhM3U0WGxiUGFNa2JNd3B6ZW9IdVd6eUJlbUtoU1VQOEpmYWF1bm5rWkdWT05veDc3K0Y5bjVrY0YKK0JyTmJXVlZpSUttVlNYMnlrUHRaMzE3Y01qN3dTbGxtZFVVQU5xc0NodHg0WEZ1MmFzVlNTNXpBb0dCQUl5ZAp6dVh0YVIzaWRHU0Z5Rlc5Snl3czVXSGh6MUdsNjFyMW9iM3lVNGlPak5aSTlaYjBhU2VUOVJxZlhqVjlQMThzCnl1ODVlQkFIVGlZbWxKQm9LVGl6cXBHcGwwRFNGMk8yaUdsUUVOU29aN24zbDNFVzhkRWZaTjZVU0dNaG5QaGkKTGxtVlVMZndZclVDTSsyaVhlMW5IN1gxVU5raFFNT0ZNQmN6NGVXNUFvR0JBSytkazdkbm4wOE5oVnlQR1c2ZgpyODdIV3dNVkgySEd4bHYrZDBxU2poWTEvOW5LNTJjWk9vRXZFR21TT1B6SFNqUXBCQ3JHWU15TzZzdmM4eGNZCm1YalVwN2IxaFI4RS92Tk1xbC94dGlTUUJSamZuWWd1Qnk1Sm5oVTZqbGdHdWlLWXAwMG90a2lkTHl3N0h0OGsKQWdTR3M3WDhxT1M0eGhmbnpmSmEydDYxCi0tLS0tRU5EIFBSSVZBVEUgS0VZLS0tLS0K"
            },
            "vcd": {
                "endpoint": "https://alp-vcd102.eng.vmware.com",
                "tokenName": "app-server",
                "apiToken": "******"
            },
            "database": {
                "port": 5432,
                "dbName": "ossdb",
                "sslMode": "DISABLE",
                "hostname": "10.139.113.102",
                "username": "oseadmin",
                "configType": "CONNECTION",
                "password": "******"
            },
            "platforms": [
                {
                    "s3": {
                        "url": "https://10.139.113.213:2324"
                    },
                    "admin": {
                        "url": "https://10.139.113.213:2325",
                        "password": "ca$hc0w",
                        "username": "root"
                    },
                    "osisName": "minio",
                    "platform": "OSIS"
                },
                {
                    "s3": {
                        "url": "https://app-vcd101.eng.vmware.com:22222"
                    },
                    "iam": {
                        "url": "http://10.139.113.221:16080"
                    },
                    "admin": {
                        "url": "https://10.139.113.221:59443",
                        "password": "XzfyARI9wxxEmumarUZuuL5jVCU=",
                        "username": "sysadmin"
                    },
                    "console": {
                        "url": "https://10.139.113.213:2323",
                        "secretKey": "console secret"
                    },
                    "platform": "CLOUDIAN"
                },
                {
                    "region": "us-west-1",
                    "platform": "AMAZON",
                    "accessKey": "wrewouirewrew",
                    "secretKey": "=-0'l;lrewrew"
                },
                {
                    "s3": {
                        "url": "https://10.139.113.213:2324"
                    },
                    "iam": {
                        "url": "https://10.139.113.213:2324"
                    },
                    "admin": {
                        "url": "https://10.139.113.213:2325",
                        "password": "ca$hc0w",
                        "username": "root"
                    },
                    "console": {
                        "url": "https://10.139.113.213:2323"
                    },
                    "platform": "ECS"
                }
            ],
            "resources": {
                "limits": {
                    "cpu": "2",
                    "memory": "2Gi"
                },
                "requests": {
                    "cpu": "0.5",
                    "memory": "100Mi"
                }
            },
            "s3Endpoint": {
                "url": "http://10.139.113.133:8080",
                "region": "us-south-1"
            },
            "s3Replicas": 2,
            "adminEndpoint": {
                "url": "https://admin.ose.example.com"
            },
            "currentPlatform": "CLOUDIAN",
            "otherProperties": {
                "oss.vcd-endpoint.password": "vmware",
                "oss.vcd-endpoint.username": "admin@system",
                "logging.level.org.apache.http.wire": "DEBUG"
            },
            "managementReplicas": 1
        }
    }
}
 */
export interface OseInstance {
  configuration: Configuration;
  validation: Validation;
  service: {
    conditions: {
      type: string;
      reason: string;
      status: 'False' | 'True';
      message: string;
      lastTransitionTime: string;
    }[];
    serviceStatus: 'NOT_INSTALLED' | 'INSTALLING' | 'RUNNING' | 'FAILED';
    configurationReference: string; // configuration uid
  };

  harbor: { url: string; password: string; username: string; tlsCertChain: string };
  portal: { k8sBR: string; providerHome: string };
  oseAppImage: string;
  kubeOperator: {
    clusterId: string;
    apiTokenName: string;
    serviceStatus: string;
    packageVersion: string;
    packageLocation: string;
    lastSeenTimestamp: string;
  };
}

interface Configuration {
  uid?: string;
  spec?: InstanceSpec;
}

export interface InstanceSpec {
  s3Replicas: number;
  managementReplicas?: number;
  tls:
    | {
        tlsCertChain: string;
        tlsPrivateKey: string;
        tlsSource: 'IMPORT';
      }
    | { tlsSource: 'SELFSIGNED' | 'ISSUER' }; // TODO: wait for Chen for ISSUER
  vcd: {
    endpoint: string;
    tokenName: string;
    tlsCertChain: string;
    tlsSignature: string;
    apiToken: string;
  };
  database: Database;
  platforms: Platform[];
  resources: {
    limits: { cpu: string; memory: string };
    requests?: { cpu: string; memory: string };
  };
  s3Endpoint: { url: string; region: string };
  adminEndpoint: { url: string };
  currentPlatform: string;
  otherProperties: Record<string, string>;
}

export interface Platform {
  platform: string;
  s3?: {
    url: string;
    tlsCertChain?: string;
    tlsSignature?: string;
  };
  admin?: {
    url: string;
    password: string;
    username: string;
    tlsCertChain?: string;
    tlsSignature?: string;
  };
  osisName?: string;
  iam?: { url: string; tlsCertChain?: string };
  console?: {
    url: string;
    secretKey?: string;
  };
  region?: string;
  accessKey?: string;
  secretKey?: string;
}

export interface Database {
  port: number;
  dbName: string;
  sslMode?: string; // not needed in UI, default value: VERIFY-FULL
  hostname: string;
  password: string;
  username: string;
  configType: 'CONNECTION' | 'DSE';
  tlsCACert: string;
}

interface Validation {
  spec?: InstanceSpec;
  conditions?: {
    type: string;
    reason?: string;
    status: 'False' | 'True';
    message?: string;
  }[];
  configurationReference?: string;
}
