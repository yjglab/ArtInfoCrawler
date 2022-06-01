# import sys, os
# sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
# import infoCrawler
# # #coiPage-1 > div.coi-banner__page-footer > div.coi-button-group > button.coi-banner__accept
# url = 'https://www.smk.dk/en/section/exhibitions/'
# exb_nums = 4
# titles_selector = "._3fPT6yXK31AYytFVoVehvj h1:nth-of-type(1)"
# dates_selector = "meta"
# thumbnails_selector = "._3fPT6yXK31AYytFVoVehvj > div > div"
# details_links_selector = "._3fPT6yXK31AYytFVoVehvj ._2SV4zmSXPud0KPOkHSy-qJ"
# details_content_selector = ".container-fluid ._2fMstMN3olTcvULTEx8vQe"
# category = "gallery"
# infoCrawler.print_msm_data(
#     url, 
#     exb_nums,
#     titles_selector, 
#     dates_selector, 
#     thumbnails_selector, 
#     details_links_selector,
#     details_content_selector,
#     )