const classMap = {
    questionFold:
        '    <details data-callout="question" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    helpFold:
        '    <details data-callout="question" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    faqFold:
        '    <details data-callout="question" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    question:
        '    <div data-callout="question" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    help:
        '    <div data-callout="question" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    faq:
        '    <div data-callout="question" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    warningFold:
        '    <details data-callout="warning" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle">\n' +
        '                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>\n' +
        '                    <path d="M12 9v4"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    cautionFold:
        '    <details data-callout="warning" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle">\n' +
        '                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>\n' +
        '                    <path d="M12 9v4"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    attentionFold:
        '    <details data-callout="warning" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle">\n' +
        '                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>\n' +
        '                    <path d="M12 9v4"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    warning:
        '    <div data-callout="warning" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle">\n' +
        '                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>\n' +
        '                    <path d="M12 9v4"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    caution:
        '    <div data-callout="warning" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle">\n' +
        '                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>\n' +
        '                    <path d="M12 9v4"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    attention:
        '    <div data-callout="warning" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-alert-triangle">\n' +
        '                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>\n' +
        '                    <path d="M12 9v4"></path>\n' +
        '                    <path d="M12 17h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    successFold:
        '    <details data-callout="success" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check">\n' +
        '                    <path d="M20 6 9 17l-5-5"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    checkFold:
        '    <details data-callout="success" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check">\n' +
        '                    <path d="M20 6 9 17l-5-5"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    doneFold:
        '    <details data-callout="success" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check">\n' +
        '                    <path d="M20 6 9 17l-5-5"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    success:
        '    <div data-callout="success" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check">\n' +
        '                    <path d="M20 6 9 17l-5-5"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    check:
        '    <div data-callout="success" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check">\n' +
        '                    <path d="M20 6 9 17l-5-5"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    done:
        '    <div data-callout="success" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check">\n' +
        '                    <path d="M20 6 9 17l-5-5"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    tipFold:
        '    <details data-callout="tip" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame">\n' +
        '                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    hintFold:
        '    <details data-callout="tip" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame">\n' +
        '                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    importantFold:
        '    <details data-callout="tip" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame">\n' +
        '                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    tip:
        '    <div data-callout="tip" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame">\n' +
        '                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    hint:
        '    <div data-callout="tip" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame">\n' +
        '                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    important:
        '    <div data-callout="tip" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame">\n' +
        '                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    todoFold:
        '    <details data-callout="todo" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check-circle-2">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="m9 12 2 2 4-4"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    infoFold:
        '    <details data-callout="info" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-info">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M12 16v-4"></path>\n' +
        '                    <path d="M12 8h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    noteFold:
        '    <details data-callout="info" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-pencil">\n' +
        '                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    todo:
        '    <div data-callout="todo" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check-circle-2">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="m9 12 2 2 4-4"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    info:
        '    <div data-callout="info" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-info">\n' +
        '                    <circle cx="12" cy="12" r="10"></circle>\n' +
        '                    <path d="M12 16v-4"></path>\n' +
        '                    <path d="M12 8h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    note:
        '    <div data-callout="info" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-pencil">\n' +
        '                    <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    abstractFold:
        '    <details data-callout="abstract" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list">\n' +
        '                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n' +
        '                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\n' +
        '                    <path d="M12 11h4"></path>\n' +
        '                    <path d="M12 16h4"></path>\n' +
        '                    <path d="M8 11h.01"></path>\n' +
        '                    <path d="M8 16h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    summaryFold:
        '    <details data-callout="abstract" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list">\n' +
        '                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n' +
        '                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\n' +
        '                    <path d="M12 11h4"></path>\n' +
        '                    <path d="M12 16h4"></path>\n' +
        '                    <path d="M8 11h.01"></path>\n' +
        '                    <path d="M8 16h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    tldrFold:
        '    <details data-callout="abstract" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list">\n' +
        '                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n' +
        '                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\n' +
        '                    <path d="M12 11h4"></path>\n' +
        '                    <path d="M12 16h4"></path>\n' +
        '                    <path d="M8 11h.01"></path>\n' +
        '                    <path d="M8 16h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    abstract:
        '    <div data-callout="abstract" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list">\n' +
        '                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n' +
        '                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\n' +
        '                    <path d="M12 11h4"></path>\n' +
        '                    <path d="M12 16h4"></path>\n' +
        '                    <path d="M8 11h.01"></path>\n' +
        '                    <path d="M8 16h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    summary:
        '    <div data-callout="abstract" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list">\n' +
        '                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n' +
        '                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\n' +
        '                    <path d="M12 11h4"></path>\n' +
        '                    <path d="M12 16h4"></path>\n' +
        '                    <path d="M8 11h.01"></path>\n' +
        '                    <path d="M8 16h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    tldr:
        '    <div data-callout="abstract" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list">\n' +
        '                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>\n' +
        '                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>\n' +
        '                    <path d="M12 11h4"></path>\n' +
        '                    <path d="M12 16h4"></path>\n' +
        '                    <path d="M8 11h.01"></path>\n' +
        '                    <path d="M8 16h.01"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    failureFold:
        '    <details data-callout="failure" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-x">\n' +
        '                    <path d="M18 6 6 18"></path>\n' +
        '                    <path d="m6 6 12 12"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    failFold:
        '    <details data-callout="failure" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-x">\n' +
        '                    <path d="M18 6 6 18"></path>\n' +
        '                    <path d="m6 6 12 12"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    missingFold:
        '    <details data-callout="failure" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-x">\n' +
        '                    <path d="M18 6 6 18"></path>\n' +
        '                    <path d="m6 6 12 12"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    failure:
        '    <div data-callout="failure" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-x">\n' +
        '                    <path d="M18 6 6 18"></path>\n' +
        '                    <path d="m6 6 12 12"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    fail:
        '    <div data-callout="failure" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-x">\n' +
        '                    <path d="M18 6 6 18"></path>\n' +
        '                    <path d="m6 6 12 12"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    missing:
        '    <div data-callout="failure" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-x">\n' +
        '                    <path d="M18 6 6 18"></path>\n' +
        '                    <path d="m6 6 12 12"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    dangerFold:
        '    <details data-callout="danger" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-zap">\n' +
        '                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    errorFold:
        '    <details data-callout="danger" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-zap">\n' +
        '                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    danger:
        '    <div data-callout="danger" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-zap">\n' +
        '                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    error:
        '    <div data-callout="danger" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-zap">\n' +
        '                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    bugFold:
        '    <details data-callout="bug" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-bug">\n' +
        '                    <path d="m8 2 1.88 1.88"></path>\n' +
        '                    <path d="M14.12 3.88 16 2"></path>\n' +
        '                    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path>\n' +
        '                    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path>\n' +
        '                    <path d="M12 20v-9"></path>\n' +
        '                    <path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path>\n' +
        '                    <path d="M6 13H2"></path>\n' +
        '                    <path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path>\n' +
        '                    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path>\n' +
        '                    <path d="M22 13h-4"></path>\n' +
        '                    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    bug:
        '    <div data-callout="bug" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-bug">\n' +
        '                    <path d="m8 2 1.88 1.88"></path>\n' +
        '                    <path d="M14.12 3.88 16 2"></path>\n' +
        '                    <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"></path>\n' +
        '                    <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"></path>\n' +
        '                    <path d="M12 20v-9"></path>\n' +
        '                    <path d="M6.53 9C4.6 8.8 3 7.1 3 5"></path>\n' +
        '                    <path d="M6 13H2"></path>\n' +
        '                    <path d="M3 21c0-2.1 1.7-3.9 3.8-4"></path>\n' +
        '                    <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4"></path>\n' +
        '                    <path d="M22 13h-4"></path>\n' +
        '                    <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    exampleFold:
        '    <details data-callout="example" class="callout" ${open}>\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-list">\n' +
        '                    <line x1="8" y1="6" x2="21" y2="6"></line>\n' +
        '                    <line x1="8" y1="12" x2="21" y2="12"></line>\n' +
        '                    <line x1="8" y1="18" x2="21" y2="18"></line>\n' +
        '                    <line x1="3" y1="6" x2="3.01" y2="6"></line>\n' +
        '                    <line x1="3" y1="12" x2="3.01" y2="12"></line>\n' +
        '                    <line x1="3" y1="18" x2="3.01" y2="18"></line>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    example:
        '    <div data-callout="example" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-list">\n' +
        '                    <line x1="8" y1="6" x2="21" y2="6"></line>\n' +
        '                    <line x1="8" y1="12" x2="21" y2="12"></line>\n' +
        '                    <line x1="8" y1="18" x2="21" y2="18"></line>\n' +
        '                    <line x1="3" y1="6" x2="3.01" y2="6"></line>\n' +
        '                    <line x1="3" y1="12" x2="3.01" y2="12"></line>\n' +
        '                    <line x1="3" y1="18" x2="3.01" y2="18"></line>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',



    quoteFold:
        '    <details data-callout="quote" class="callout" ${open} >\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-quote">\n' +
        '                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    citeFold:
        '    <details data-callout="quote" class="callout" ${open} >\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-quote">\n' +
        '                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    requirementsFold:
        '    <details data-callout="quote" class="callout" ${open} >\n' +
        '        <summary class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-settings">\n' +
        '                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>\n' +
        '                    <circle cx="12" cy="12" r="3"></circle>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18" /></svg>\n' +
        '        </summary>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </details>\n',
    quote:
        '    <div data-callout="quote" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-quote">\n' +
        '                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    cite:
        '    <div data-callout="quote" class="callout">\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-quote">\n' +
        '                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                    <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
    requirements:
        '    <div data-callout="quote" class="callout" ${open} >\n' +
        '        <div class="callout-title" dir="auto">\n' +
        '            <div class="callout-icon">\n' +
        '                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-settings">\n' +
        '                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>\n' +
        '                    <circle cx="12" cy="12" r="3"></circle>\n' +
        '                </svg>\n' +
        '            </div>\n' +
        '            <div class="callout-title-inner">${title}</div>\n' +
        '        </div>\n' +
        '        <div class="callout-content">${content}</div>\n' +
        '    </div>\n',
}

const GithubCallout = Object.keys(classMap).map(key =>
    ({
        type: 'output',
        filter: function filter(text) {
            const regex = new RegExp(`<blockquote>\n *<p>\\[!${key}\\]([+-]?) *([^\\n]*(?=(?:<\\/p>|<br *\\/)))(?:<\\/p>|<br \\/>)\n((?:[\\s\\S]*?(?=<\\/blockquote>)))<\\/blockquote>`, "m");
            let deep = 0;
            let someSubText = text;

            while (deep < 4) {
                ++deep;
                someSubText = someSubText.replace(
                    regex,
                    function (str, open, title, content) {

                        if (title === "") {
                            title = key.replace(/^./, (char) => char.toUpperCase());
                        }
                        if (open === '') {
                            open = ' ';
                            return classMap[key].replace('${open}', open).replace('${title}', title).replace('${content}', content);
                        } else {
                            if (open === '+') {open = 'open=""';}
                            else if (open === '-') {open = ' ';}
                            return classMap[key+'Fold'].replace('${open}', open).replace('${title}', title).replace('${content}', content);
                        }
                    }
                );
            }
            return someSubText;
        }
    })
);

export default GithubCallout;