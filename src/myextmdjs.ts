const classMap = {
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
    }

// const myExtension = Object.keys(classMap)
//     .map(key => ({
//         type: 'output',
//         // regex: new RegExp(`<${key}(.*)>`, 'gm'),
//         // regex: new RegExp(`<blockquote>\\n *<p>\\[!${key}\\][+-]? *(?<title>[^\\n]*(?=<(?:\\/p|br \\/)>))<(?:\\/p|br \\/)>`, 'gm'),
//         regex: new RegExp(`<blockquote>\\n *<p>\\[!${key}\\][+-]? *(?<title>[^\\n]*(?=(?:<\\/p>|<br *\\/>)))<(?:\\/p|br \\/)>\\n(?<content>(?:[\\s\\S]*?(?=<\\/blockquote>)))<\\/blockquote>`, 'gm'),
//         replace: `${classMap[key]}`
//     }));

const myExtension = Object.keys(classMap)
    .map(key => ({
        type: 'output',
        regex: new RegExp(`<blockquote>\\n *<p>\\[!${key}\\][+-]? *(?<title>[^\\n]*(?=(?:<\\/p>|<br *\\/>)))<(?:\\/p|br \\/)>\\n(?<content>(?:[\\s\\S]*?(?=<\\/blockquote>)))<\\/blockquote>`, 'gm'),
        replace: function(match, ...args) {
            const groups = args[args.length - 1];  // The groups from the regex
            const title = groups.title || '';      // Extracted title
            const content = groups.content || '';  // Extracted content

            // Use the extracted title and content in the template
            return classMap[key].replace('${title}', title).replace('${content}', content);
        }
    }));

export default myExtension;