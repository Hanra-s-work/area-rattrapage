/*
** EPITECH PROJECT, 2024
** area-rattrapage
** File description:
** github_widget.ts
*/

export namespace GithubWidget {
    export function injectGlobalCSS(widgetId: string): void {
        const css = `
            #${widgetId} {
                border: 2px solid #333;
                background: #f9f9f9;
                padding: 10px;
                margin: 10px auto;
                border-radius: 5px;
                width: 400px;
                height: 600px;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                box-sizing: border-box;
            }

            #${widgetId} h3, #${widgetId} h4 {
                color: #0366d6;
                margin-bottom: 5px;
            }

            #${widgetId} ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            #${widgetId} li {
                padding: 5px 0;
            }

            #${widgetId} a {
                text-decoration: none;
                color: #0366d6;
                font-weight: bold;
            }

            #${widgetId} a:hover {
                text-decoration: underline;
            }

            #${widgetId} .repositories {
                height: 50%;
                display: flex;
                flex-direction: column;
                overflow: hidden;
                position: relative;
            }

            #${widgetId} .repositories_list {
                background: #E8FFCEFF;
                min-height: 0;
                display: flex;
                flex-direction: column;
                gap: 5px;
                overflow-y: auto;
                scrollbar-width: thin;
                scrollbar-color: #0366d6 #f9f9f9;
                height: 60px;
            }

            #${widgetId} .repositories_list::-webkit-scrollbar {
                width: 8px;
            }

            #${widgetId} .repositories_list::-webkit-scrollbar-thumb {
                background: #0366d6;
                border-radius: 4px;
            }

            #${widgetId} .repositories_list::-webkit-scrollbar-track {
                background: #f9f9f9;
            }
        `;

        const styleElement = document.createElement("style");
        styleElement.innerHTML = css;
        document.head.appendChild(styleElement);
    }

    export function stringFunctionInjectGlobalCSS(widgetId: string): string {
        return `
            <script type="text/javascript">
                const css = \`
                    #${widgetId} {border: 2px solid #333;background: #f9f9f9;padding: 10px;margin: 10px auto;border-radius: 5px;width: 400px;height: 600px;display: flex;flex-direction: column;overflow: hidden;box-sizing: border-box;}
                    #${widgetId} h3, #${widgetId} h4 {color: #0366d6;margin-bottom: 5px;}
                    #${widgetId} ul {list-style: none;padding: 0;margin: 0;}
                    #${widgetId} li {padding: 5px 0;}
                    #${widgetId} a {text-decoration: none;color: #0366d6;font-weight: bold;}
                    #${widgetId} a:hover {text-decoration: underline;}
                    #${widgetId} .repositories {height: 50%;display: flex;flex-direction: column;overflow: hidden;position: relative;}
                    #${widgetId} .repositories_list {background: #E8FFCEFF;min-height: 0;display: flex;flex-direction: column;gap: 5px;overflow-y: auto;scrollbar-width: thin;scrollbar-color: #0366d6 #f9f9f9;height: 60px;}
                    #${widgetId} .repositories_list::-webkit-scrollbar {width: 8px;}
                    #${widgetId} .repositories_list::-webkit-scrollbar-thumb {background: #0366d6;border-radius: 4px;}
                    #${widgetId} .repositories_list::-webkit-scrollbar-track {background: #f9f9f9;}
                \`;
                const styleElement = document.createElement("style");styleElement.innerHTML = css;document.head.appendChild(styleElement);
            </script>
        `;
    }

    export function sortRepositories(repositories: any[]): any[] {
        return repositories.sort((a, b) => (a.private === b.private ? 0 : a.private ? -1 : 1));
    }

    export async function fetchAllRepositories(token: string, maxPages = 100): Promise<any[]> {
        if (!token) {
            console.error("No access token provided.");
            return [];
        }

        let allRepos: any[] = [];
        let page = 1;
        const perPage = 100;
        let hasMore = true;

        while (hasMore && page <= maxPages) {
            try {
                const response = await fetch(`https://api.github.com/user/repos?per_page=${perPage}&page=${page}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });

                if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

                const repos = await response.json();
                allRepos = [...allRepos, ...repos];
                hasMore = repos.length === perPage;
                page++;
            } catch (error) {
                console.error("Error fetching repositories:", error);
                return [];
            }
        }
        return allRepos;
    }

    export async function fetchOrganizations(token: string): Promise<any[]> {
        if (!token) {
            console.error("No access token provided.");
            return [];
        }

        try {
            const response = await fetch("https://api.github.com/user/orgs", {
                headers: { Authorization: `Bearer ${token}` }
            });

            if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);

            return await response.json();
        } catch (error) {
            console.error("Error fetching organizations:", error);
            return [];
        }
    }

    export async function renderGithubWidget(
        widgetId: string,
        listType: string,
        allRepos: any[],
        organizations: any[]
    ): Promise<string> {
        let html = `<div id="${widgetId}" class="github_widget_body">`;
        html += `<h3>Organizations (${organizations.length})</h3>`;
        html += organizations.length ? `<ul>` : `<p><strong>No organizations found.</strong></p>`;
        organizations.forEach(org => {
            html += `<li><a href="${org.html_url}" target="_blank">${org.login}</a></li>`;
        });
        html += organizations.length ? `</ul>` : "";

        html += `<h3>Repositories (${allRepos.length})</h3>`;
        let privateRepos = "<ul class='private_repos'>";
        let publicRepos = "<ul class='public_repos'>";
        let privateReposCount = 0;
        let publicReposCount = 0;

        allRepos.forEach(repo => {
            const fork = repo.fork ? "<span class='repo_fork'>Forked</span>" : "<span class='repo_not_fork'>Not Forked</span>";
            const tags = repo.topics?.length ? repo.topics.join(", ") : "No tags";
            const description = repo.description ? `<p class='repo_description'>${repo.description}</p>` : "";

            const repoHTML = `
                <li>
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    ${fork} | Tags: ${tags} ${description}
                </li>
            `;

            if (repo.private) {
                privateRepos += repoHTML;
                privateReposCount++;
            } else {
                publicRepos += repoHTML;
                publicReposCount++;
            }
        });

        privateRepos += "</ul>";
        publicRepos += "</ul>";

        html += `<h4>Private Repositories (${privateReposCount})</h4>${privateRepos}`;
        html += `<h4>Public Repositories (${publicReposCount})</h4>${publicRepos}`;
        html += `</div>`;
        return html;
    }

    export async function injector(widget_name: string, index: number, token: string): Promise<string> {
        const widgetId = `${widget_name}_${index}`;
        const listType = "numbered";

        console.log("Fetching repositories...");
        const allRepos = await fetchAllRepositories(token);
        console.log("Fetching organizations...");
        const organizations = await fetchOrganizations(token);
        console.log("Rendering widget...");
        return await renderGithubWidget(widgetId, listType, allRepos, organizations);
    }
};
